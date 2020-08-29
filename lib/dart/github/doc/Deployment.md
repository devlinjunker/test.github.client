# openapi.model.Deployment

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**creator** | [**SimpleUser**](SimpleUser.md) |  | [default to null]
**description** | **String** |  | [default to null]
**environment** | **String** | Name for the target deployment environment. | [default to null]
**id** | **int** | Unique identifier of the deployment | [default to null]
**nodeId** | **String** |  | [default to null]
**originalEnvironment** | **String** |  | [optional] [default to null]
**payload** | [**Object**](.md) |  | [default to null]
**performedViaGithubApp** | [**Integration**](Integration.md) |  | [optional] [default to null]
**productionEnvironment** | **bool** | Specifies if the given environment is one that end-users directly interact with. Default: false. | [optional] [default to null]
**ref** | **String** | The ref to deploy. This can be a branch, tag, or sha. | [default to null]
**repositoryUrl** | **String** |  | [default to null]
**sha** | **String** |  | [default to null]
**statusesUrl** | **String** |  | [default to null]
**task** | **String** | Parameter to specify a task to execute | [default to null]
**transientEnvironment** | **bool** | Specifies if the given environment is will no longer exist at some point in hte future. Default: false. | [optional] [default to null]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**url** | **String** |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


