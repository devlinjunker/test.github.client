# openapi.model.Issue

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeLockReason** | **String** |  | [optional] [default to null]
**assignee** | [**SimpleUser**](SimpleUser.md) |  | [default to null]
**assignees** | [**List&lt;SimpleUser&gt;**](SimpleUser.md) |  | [optional] [default to []]
**authorAssociation** | **String** |  | [default to null]
**body** | **String** | Contents of the issue | [optional] [default to null]
**bodyHtml** | **String** |  | [optional] [default to null]
**bodyText** | **String** |  | [optional] [default to null]
**closedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**closedBy** | [**SimpleUser**](SimpleUser.md) |  | [optional] [default to null]
**comments** | **int** |  | [default to null]
**commentsUrl** | **String** |  | [default to null]
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**eventsUrl** | **String** |  | [default to null]
**htmlUrl** | **String** |  | [default to null]
**id** | **int** |  | [default to null]
**labels** | [**List&lt;OneOf&lt;string,object&gt;&gt;**](OneOf&lt;string,object&gt;.md) | Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository | [default to []]
**labelsUrl** | **String** |  | [default to null]
**locked** | **bool** |  | [default to null]
**milestone** | [**Milestone**](Milestone.md) |  | [default to null]
**nodeId** | **String** |  | [default to null]
**number** | **int** | Number uniquely identifying the issue within its repository | [default to null]
**performedViaGithubApp** | [**Integration**](Integration.md) |  | [optional] [default to null]
**pullRequest** | [**IssuePullRequest**](IssuePullRequest.md) |  | [optional] [default to null]
**reactions** | [**ReactionRollup**](ReactionRollup.md) |  | [optional] [default to null]
**repository** | [**Repository**](Repository.md) |  | [optional] [default to null]
**repositoryUrl** | **String** |  | [default to null]
**state** | **String** | State of the issue; either &#39;open&#39; or &#39;closed&#39; | [default to null]
**timelineUrl** | **String** |  | [optional] [default to null]
**title** | **String** | Title of the issue | [default to null]
**updatedAt** | [**DateTime**](DateTime.md) |  | [default to null]
**url** | **String** | URL for the issue | [default to null]
**user** | [**SimpleUser**](SimpleUser.md) |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


