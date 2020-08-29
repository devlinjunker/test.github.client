# GitHubV3RestApi.PullRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PullRequestLinks**](PullRequestLinks.md) |  | 
**activeLockReason** | **String** |  | [optional] 
**additions** | **Number** |  | 
**assignee** | [**SimpleUser**](SimpleUser.md) |  | 
**assignees** | [**[SimpleUser]**](SimpleUser.md) |  | [optional] 
**authorAssociation** | **String** |  | 
**base** | [**PullRequestBase**](PullRequestBase.md) |  | 
**body** | **String** |  | 
**changedFiles** | **Number** |  | 
**closedAt** | **Date** |  | 
**comments** | **Number** |  | 
**commentsUrl** | **String** |  | 
**commits** | **Number** |  | 
**commitsUrl** | **String** |  | 
**createdAt** | **Date** |  | 
**deletions** | **Number** |  | 
**diffUrl** | **String** |  | 
**draft** | **Boolean** | Indicates whether or not the pull request is a draft. | [optional] 
**head** | [**PullRequestHead**](PullRequestHead.md) |  | 
**htmlUrl** | **String** |  | 
**id** | **Number** |  | 
**issueUrl** | **String** |  | 
**labels** | [**[IssueSearchResultItemLabels]**](IssueSearchResultItemLabels.md) |  | 
**locked** | **Boolean** |  | 
**maintainerCanModify** | **Boolean** | Indicates whether maintainers can modify the pull request. | 
**mergeCommitSha** | **String** |  | 
**mergeable** | **Boolean** |  | 
**mergeableState** | **String** |  | 
**merged** | **Boolean** |  | 
**mergedAt** | **Date** |  | 
**mergedBy** | [**SimpleUser**](SimpleUser.md) |  | 
**milestone** | [**Milestone**](Milestone.md) |  | 
**nodeId** | **String** |  | 
**_number** | **Number** | Number uniquely identifying the pull request within its repository. | 
**patchUrl** | **String** |  | 
**rebaseable** | **Boolean** |  | [optional] 
**requestedReviewers** | [**[SimpleUser]**](SimpleUser.md) |  | [optional] 
**requestedTeams** | [**[TeamSimple]**](TeamSimple.md) |  | [optional] 
**reviewCommentUrl** | **String** |  | 
**reviewComments** | **Number** |  | 
**reviewCommentsUrl** | **String** |  | 
**state** | **String** | State of this Pull Request. Either &#x60;open&#x60; or &#x60;closed&#x60;. | 
**statusesUrl** | **String** |  | 
**title** | **String** | The title of the pull request. | 
**updatedAt** | **Date** |  | 
**url** | **String** |  | 
**user** | [**SimpleUser**](SimpleUser.md) |  | 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)




