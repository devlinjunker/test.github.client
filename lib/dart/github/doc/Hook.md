# openapi.model.Hook

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Determines whether the hook is actually triggered on pushes. | [default to null]
**config** | [**HookConfig**](HookConfig.md) |  | [default to null]
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**events** | **List&lt;String&gt;** | Determines what events the hook is triggered for. Default: [&#39;push&#39;]. | [default to []]
**id** | **int** | Unique identifier of the webhook. | [default to null]
**lastResponse** | [**HookResponse**](HookResponse.md) |  | [default to null]
**name** | **String** | The name of a valid service, use &#39;web&#39; for a webhook. | [default to null]
**pingUrl** | **String** |  | [default to null]
**testUrl** | **String** |  | [default to null]
**type** | **String** |  | [default to null]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**url** | **String** |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


