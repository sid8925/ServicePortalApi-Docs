# Auth ADMIN

```ts
const authADMINController = new AuthADMINController(client);
```

## Class Name

`AuthADMINController`

## Methods

* [Create User](../../doc/controllers/auth-admin.md#create-user)
* [User Create Test Copy](../../doc/controllers/auth-admin.md#user-create-test-copy)
* [Login](../../doc/controllers/auth-admin.md#login)


# Create User

```ts
async createUser(  body: CreateUserRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreateUserRequest`](../../doc/models/create-user-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: CreateUserRequest = {
  name: 'Admin Sid',
  email: 'tuser@admin.com',
  password: 'test',
  role: 'user',
};

try {
  const { result, ...httpResponse } = await authADMINController.createUser(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# User Create Test Copy

```ts
async userCreateTestCopy(  body: UserCreateTestCopyRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UserCreateTestCopyRequest`](../../doc/models/user-create-test-copy-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: UserCreateTestCopyRequest = {
  name: 'Shubham Siddharth',
  email: 'johndoe@exampledd.com1',
  password: 'sid123',
  role: 'admin',
};

try {
  const { result, ...httpResponse } = await authADMINController.userCreateTestCopy(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Login

:information_source: **Note** This endpoint does not require authentication.

```ts
async login(  body: LoginRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`LoginRequest`](../../doc/models/login-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const body: LoginRequest = {
  email: 'admin@admin.com',
  password: 'test',
};

try {
  const { result, ...httpResponse } = await authADMINController.login(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

