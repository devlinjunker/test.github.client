# openapi.model.AuthenticationToken

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiresAt** | [**DateTime**](DateTime.md) | The time this token expires | [default to null]
**permissions** | [**Object**](.md) |  | [optional] [default to null]
**repositories** | [**List&lt;Repository&gt;**](Repository.md) | The repositories this token has access to | [optional] [default to []]
**repositorySelection** | **String** | Describe whether all repositories have been selected or there&#39;s a selection involved | [optional] [default to null]
**singleFile** | **String** |  | [optional] [default to null]
**token** | **String** | The token used for authentication | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


