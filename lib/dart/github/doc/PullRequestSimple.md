# openapi.model.PullRequestSimple

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PullRequestLinks**](PullRequestLinks.md) |  | [default to null]
**activeLockReason** | **String** |  | [optional] [default to null]
**assignee** | [**SimpleUser**](SimpleUser.md) |  | [default to null]
**assignees** | [**List&lt;SimpleUser&gt;**](SimpleUser.md) |  | [optional] [default to []]
**authorAssociation** | **String** |  | [default to null]
**base** | [**PullRequestSimpleBase**](PullRequestSimpleBase.md) |  | [default to null]
**body** | **String** |  | [default to null]
**closedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**commentsUrl** | **String** |  | [default to null]
**commitsUrl** | **String** |  | [default to null]
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**diffUrl** | **String** |  | [default to null]
**draft** | **bool** | Indicates whether or not the pull request is a draft. | [optional] [default to null]
**head** | [**PullRequestSimpleBase**](PullRequestSimpleBase.md) |  | [default to null]
**htmlUrl** | **String** |  | [default to null]
**id** | **int** |  | [default to null]
**issueUrl** | **String** |  | [default to null]
**labels** | [**List&lt;PullRequestSimpleLabels&gt;**](PullRequestSimpleLabels.md) |  | [default to []]
**locked** | **bool** |  | [default to null]
**mergeCommitSha** | **String** |  | [default to null]
**mergedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**milestone** | [**Milestone**](Milestone.md) |  | [default to null]
**nodeId** | **String** |  | [default to null]
**number** | **int** |  | [default to null]
**patchUrl** | **String** |  | [default to null]
**requestedReviewers** | [**List&lt;SimpleUser&gt;**](SimpleUser.md) |  | [optional] [default to []]
**requestedTeams** | [**List&lt;TeamSimple&gt;**](TeamSimple.md) |  | [optional] [default to []]
**reviewCommentUrl** | **String** |  | [default to null]
**reviewCommentsUrl** | **String** |  | [default to null]
**state** | **String** |  | [default to null]
**statusesUrl** | **String** |  | [default to null]
**title** | **String** |  | [default to null]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**url** | **String** |  | [default to null]
**user** | [**SimpleUser**](SimpleUser.md) |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


