# openapi.model.DeploymentStatus

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**creator** | [**SimpleUser**](SimpleUser.md) |  | [default to null]
**deploymentUrl** | **String** |  | [default to null]
**description** | **String** | A short description of the status. | [default to &quot;&quot;]
**environment** | **String** | The environment of the deployment that the status is for. | [optional] [default to &quot;&quot;]
**environmentUrl** | **String** | The URL for accessing your environment. | [optional] [default to &quot;&quot;]
**id** | **int** |  | [default to null]
**logUrl** | **String** | The URL to associate with this status. | [optional] [default to &quot;&quot;]
**nodeId** | **String** |  | [default to null]
**performedViaGithubApp** | [**Integration**](Integration.md) |  | [optional] [default to null]
**repositoryUrl** | **String** |  | [default to null]
**state** | **String** | The state of the status. | [default to null]
**targetUrl** | **String** | Deprecated: the URL to associate with this status. | [default to &quot;&quot;]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**url** | **String** |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


