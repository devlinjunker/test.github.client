# openapi.model.Installation

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessTokensUrl** | **String** |  | [default to null]
**account** | [**AnyOf&lt;simpleUser,enterprise&gt;**](AnyOf&lt;simpleUser,enterprise&gt;.md) |  | [default to null]
**appId** | **int** |  | [default to null]
**appSlug** | **String** |  | [default to null]
**contactEmail** | **String** |  | [optional] [default to null]
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**events** | **List&lt;String&gt;** |  | [default to []]
**htmlUrl** | **String** |  | [default to null]
**id** | **int** | The ID of the installation. | [default to null]
**permissions** | [**InstallationPermissions**](InstallationPermissions.md) |  | [default to null]
**repositoriesUrl** | **String** |  | [default to null]
**repositorySelection** | **String** | Describe whether all repositories have been selected or there&#39;s a selection involved | [default to null]
**singleFileName** | **String** |  | [default to null]
**suspendedAt** | [**DateTime**](DateTime.md) |  | [optional] [default to null]
**suspendedBy** | [**SimpleUser**](SimpleUser.md) |  | [optional] [default to null]
**targetId** | **int** | The ID of the user or organization this token is being scoped to. | [default to null]
**targetType** | **String** |  | [default to null]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


