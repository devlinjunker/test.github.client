# openapi.model.ReviewComment

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**ReviewCommentLinks**](ReviewCommentLinks.md) |  | [default to null]
**authorAssociation** | **String** |  | [default to null]
**body** | **String** |  | [default to null]
**bodyHtml** | **String** |  | [optional] [default to null]
**bodyText** | **String** |  | [optional] [default to null]
**commitId** | **String** |  | [default to null]
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**diffHunk** | **String** |  | [default to null]
**htmlUrl** | **String** |  | [default to null]
**id** | **int** |  | [default to null]
**inReplyToId** | **int** |  | [optional] [default to null]
**line** | **int** | The line of the blob to which the comment applies. The last line of the range for a multi-line comment | [optional] [default to null]
**nodeId** | **String** |  | [default to null]
**originalCommitId** | **String** |  | [default to null]
**originalLine** | **int** | The original line of the blob to which the comment applies. The last line of the range for a multi-line comment | [optional] [default to null]
**originalPosition** | **int** |  | [default to null]
**originalStartLine** | **int** | The original first line of the range for a multi-line comment. | [optional] [default to null]
**path** | **String** |  | [default to null]
**position** | **int** |  | [default to null]
**pullRequestReviewId** | **int** |  | [default to null]
**pullRequestUrl** | **String** |  | [default to null]
**side** | **String** | The side of the first line of the range for a multi-line comment. | [optional] [default to &quot;RIGHT&quot;]
**startLine** | **int** | The first line of the range for a multi-line comment. | [optional] [default to null]
**startSide** | **String** | The side of the first line of the range for a multi-line comment. | [optional] [default to &quot;RIGHT&quot;]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**url** | **String** |  | [default to null]
**user** | [**SimpleUser**](SimpleUser.md) |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


