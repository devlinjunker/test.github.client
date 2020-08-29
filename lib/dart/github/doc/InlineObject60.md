# openapi.model.InlineObject60

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**ReposOwnerRepoContentsPathAuthor**](ReposOwnerRepoContentsPathAuthor.md) |  | [optional] [default to null]
**branch** | **String** | The branch name. Default: the repository’s default branch (usually &#x60;master&#x60;) | [optional] [default to null]
**committer** | [**ReposOwnerRepoContentsPathCommitter**](ReposOwnerRepoContentsPathCommitter.md) |  | [optional] [default to null]
**content** | **String** | The new file content, using Base64 encoding. | [default to null]
**message** | **String** | The commit message. | [default to null]
**sha** | **String** | **Required if you are updating a file**. The blob SHA of the file being replaced. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


