# openapi.model.PullRequestReviewComment

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PullRequestReviewCommentLinks**](PullRequestReviewCommentLinks.md) |  | [default to null]
**authorAssociation** | **String** | How the author of the comment is associated with the pull request. | [default to null]
**body** | **String** | The text of the comment. | [default to null]
**bodyHtml** | **String** |  | [optional] [default to null]
**bodyText** | **String** |  | [optional] [default to null]
**commitId** | **String** | The SHA of the commit to which the comment applies. | [default to null]
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**diffHunk** | **String** | The diff of the line that the comment refers to. | [default to null]
**htmlUrl** | **String** | HTML URL for the pull request review comment. | [default to null]
**id** | **int** | The ID of the pull request review comment. | [default to null]
**inReplyToId** | **int** | The comment ID to reply to. | [optional] [default to null]
**line** | **int** | The line of the blob to which the comment applies. The last line of the range for a multi-line comment | [optional] [default to null]
**nodeId** | **String** | The node ID of the pull request review comment. | [default to null]
**originalCommitId** | **String** | The SHA of the original commit to which the comment applies. | [default to null]
**originalLine** | **int** | The line of the blob to which the comment applies. The last line of the range for a multi-line comment | [optional] [default to null]
**originalPosition** | **int** | The index of the original line in the diff to which the comment applies. | [default to null]
**originalStartLine** | **int** | The first line of the range for a multi-line comment. | [optional] [default to null]
**path** | **String** | The relative path of the file to which the comment applies. | [default to null]
**position** | **int** | The line index in the diff to which the comment applies. | [default to null]
**pullRequestReviewId** | **int** | The ID of the pull request review to which the comment belongs. | [default to null]
**pullRequestUrl** | **String** | URL for the pull request that the review comment belongs to. | [default to null]
**reactions** | [**ReactionRollup**](ReactionRollup.md) |  | [optional] [default to null]
**side** | **String** | The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment | [optional] [default to &quot;RIGHT&quot;]
**startLine** | **int** | The first line of the range for a multi-line comment. | [optional] [default to null]
**startSide** | **String** | The side of the first line of the range for a multi-line comment. | [optional] [default to &quot;RIGHT&quot;]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**url** | **String** | URL for the pull request review comment | [default to null]
**user** | [**SimpleUser**](SimpleUser.md) |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


