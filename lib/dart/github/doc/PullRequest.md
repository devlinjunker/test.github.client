# openapi.model.PullRequest

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PullRequestLinks**](PullRequestLinks.md) |  | [default to null]
**activeLockReason** | **String** |  | [optional] [default to null]
**additions** | **int** |  | [default to null]
**assignee** | [**SimpleUser**](SimpleUser.md) |  | [default to null]
**assignees** | [**List&lt;SimpleUser&gt;**](SimpleUser.md) |  | [optional] [default to []]
**authorAssociation** | **String** |  | [default to null]
**base** | [**PullRequestBase**](PullRequestBase.md) |  | [default to null]
**body** | **String** |  | [default to null]
**changedFiles** | **int** |  | [default to null]
**closedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**comments** | **int** |  | [default to null]
**commentsUrl** | **String** |  | [default to null]
**commits** | **int** |  | [default to null]
**commitsUrl** | **String** |  | [default to null]
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**deletions** | **int** |  | [default to null]
**diffUrl** | **String** |  | [default to null]
**draft** | **bool** | Indicates whether or not the pull request is a draft. | [optional] [default to null]
**head** | [**PullRequestHead**](PullRequestHead.md) |  | [default to null]
**htmlUrl** | **String** |  | [default to null]
**id** | **int** |  | [default to null]
**issueUrl** | **String** |  | [default to null]
**labels** | [**List&lt;IssueSearchResultItemLabels&gt;**](IssueSearchResultItemLabels.md) |  | [default to []]
**locked** | **bool** |  | [default to null]
**maintainerCanModify** | **bool** | Indicates whether maintainers can modify the pull request. | [default to null]
**mergeCommitSha** | **String** |  | [default to null]
**mergeable** | **bool** |  | [default to null]
**mergeableState** | **String** |  | [default to null]
**merged** | **bool** |  | [default to null]
**mergedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**mergedBy** | [**SimpleUser**](SimpleUser.md) |  | [default to null]
**milestone** | [**Milestone**](Milestone.md) |  | [default to null]
**nodeId** | **String** |  | [default to null]
**number** | **int** | Number uniquely identifying the pull request within its repository. | [default to null]
**patchUrl** | **String** |  | [default to null]
**rebaseable** | **bool** |  | [optional] [default to null]
**requestedReviewers** | [**List&lt;SimpleUser&gt;**](SimpleUser.md) |  | [optional] [default to []]
**requestedTeams** | [**List&lt;TeamSimple&gt;**](TeamSimple.md) |  | [optional] [default to []]
**reviewCommentUrl** | **String** |  | [default to null]
**reviewComments** | **int** |  | [default to null]
**reviewCommentsUrl** | **String** |  | [default to null]
**state** | **String** | State of this Pull Request. Either &#x60;open&#x60; or &#x60;closed&#x60;. | [default to null]
**statusesUrl** | **String** |  | [default to null]
**title** | **String** | The title of the pull request. | [default to null]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**url** | **String** |  | [default to null]
**user** | [**SimpleUser**](SimpleUser.md) |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


