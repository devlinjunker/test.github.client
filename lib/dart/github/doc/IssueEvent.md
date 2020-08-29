# openapi.model.IssueEvent

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | [**SimpleUser**](SimpleUser.md) |  | [default to null]
**assignee** | [**SimpleUser**](SimpleUser.md) |  | [optional] [default to null]
**assigner** | [**SimpleUser**](SimpleUser.md) |  | [optional] [default to null]
**authorAssociation** | **String** |  | [optional] [default to null]
**commitId** | **String** |  | [default to null]
**commitUrl** | **String** |  | [default to null]
**createdAt** | [**DateTime**](DateTime.md) |  | [default to null]
**dismissedReview** | [**IssueEventDismissedReview**](IssueEventDismissedReview.md) |  | [optional] [default to null]
**event** | **String** |  | [default to null]
**id** | **int** |  | [default to null]
**issue** | [**IssueSimple**](IssueSimple.md) |  | [optional] [default to null]
**label** | [**IssueEventLabel**](IssueEventLabel.md) |  | [optional] [default to null]
**lockReason** | **String** |  | [optional] [default to null]
**milestone** | [**IssueEventMilestone**](IssueEventMilestone.md) |  | [optional] [default to null]
**nodeId** | **String** |  | [default to null]
**projectCard** | [**IssueEventProjectCard**](IssueEventProjectCard.md) |  | [optional] [default to null]
**rename** | [**IssueEventRename**](IssueEventRename.md) |  | [optional] [default to null]
**requestedReviewer** | [**SimpleUser**](SimpleUser.md) |  | [optional] [default to null]
**requestedTeam** | [**Team**](Team.md) |  | [optional] [default to null]
**reviewRequester** | [**SimpleUser**](SimpleUser.md) |  | [optional] [default to null]
**url** | **String** |  | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


