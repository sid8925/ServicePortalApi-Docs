# Slider

```ts
const sliderController = new SliderController(client);
```

## Class Name

`SliderController`

## Methods

* [Slider List](../../doc/controllers/slider.md#slider-list)
* [Add Slider](../../doc/controllers/slider.md#add-slider)
* [Delete Slider](../../doc/controllers/slider.md#delete-slider)


# Slider List

:information_source: **Note** This endpoint does not require authentication.

```ts
async sliderList(requestOptions?: RequestOptions): Promise<ApiResponse<void>>
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
  const { result, ...httpResponse } = await sliderController.sliderList();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Add Slider

:information_source: **Note** This endpoint does not require authentication.

```ts
async addSlider(  title: string,
  image: FileWrapper,
  body: string,
  route: string,
  slidefor: string,
requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Form, Required | - |
| `image` | `FileWrapper` | Form, Required | - |
| `body` | `string` | Form, Required | - |
| `route` | `string` | Form, Required | - |
| `slidefor` | `string` | Form, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const title = 'app slider';

const image = new FileWrapper(fs.createReadStream('dummy_file'));

const body = 'body';

const route = 'routes goes here';

const slidefor = 'app';

try {
  const { result, ...httpResponse } = await sliderController.addSlider(
  title,
  image,
  body,
  route,
  slidefor
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete Slider

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteSlider(requestOptions?: RequestOptions): Promise<ApiResponse<void>>
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
  const { result, ...httpResponse } = await sliderController.deleteSlider();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

