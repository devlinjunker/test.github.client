# openapi.model.Integration

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **String** |  | [optional] [default to null]
**clientSecret** | **String** |  | [optional] [default to null]
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**description** | **String** |  | [default to null]
**events** | **List&lt;String&gt;** | The list of events for the GitHub app | [default to []]
**externalUrl** | **String** |  | [default to null]
**htmlUrl** | **String** |  | [default to null]
**id** | **int** | Unique identifier of the GitHub app | [default to null]
**installationsCount** | **int** | The number of installations associated with the GitHub app | [optional] [default to null]
**name** | **String** | The name of the GitHub app | [default to null]
**nodeId** | **String** |  | [default to null]
**owner** | [**SimpleUser**](SimpleUser.md) |  | [default to null]
**pem** | **String** |  | [optional] [default to null]
**permissions** | **Map&lt;String, String&gt;** | The set of permissions for the GitHub app | [default to {}]
**slug** | **String** | The slug name of the GitHub app | [optional] [default to null]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**webhookSecret** | **String** |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


