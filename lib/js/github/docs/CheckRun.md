# GitHubV3RestApi.CheckRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app** | [**Integration**](Integration.md) |  | 
**checkSuite** | [**CheckRunCheckSuite**](CheckRunCheckSuite.md) |  | 
**completedAt** | **Date** |  | 
**conclusion** | **String** |  | 
**detailsUrl** | **String** |  | 
**externalId** | **String** |  | 
**headSha** | **String** | The SHA of the commit that is being checked. | 
**htmlUrl** | **String** |  | 
**id** | **Number** | The id of the check. | 
**name** | **String** | The name of the check. | 
**nodeId** | **String** |  | 
**output** | [**CheckRunOutput**](CheckRunOutput.md) |  | 
**pullRequests** | [**[PullRequestMinimal]**](PullRequestMinimal.md) |  | 
**startedAt** | **Date** |  | 
**status** | **String** | The phase of the lifecycle that the check is currently in. | 
**url** | **String** |  | 



## Enum: StatusEnum


* `queued` (value: `"queued"`)

* `in_progress` (value: `"in_progress"`)

* `completed` (value: `"completed"`)




