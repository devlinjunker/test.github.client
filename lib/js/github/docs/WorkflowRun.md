# GitHubV3RestApi.WorkflowRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifactsUrl** | **String** | The URL to the artifacts for the workflow run. | 
**cancelUrl** | **String** | The URL to cancel the workflow run. | 
**checkSuiteUrl** | **String** | The URL to the associated check suite. | 
**conclusion** | **String** |  | 
**createdAt** | **Date** |  | 
**event** | **String** |  | 
**headBranch** | **String** |  | 
**headCommit** | [**SimpleCommit**](SimpleCommit.md) |  | 
**headRepository** | [**MinimalRepository**](MinimalRepository.md) |  | 
**headRepositoryId** | **Number** |  | [optional] 
**headSha** | **String** | The SHA of the head commit that points to the version of the worflow being run. | 
**htmlUrl** | **String** |  | 
**id** | **Number** | The ID of the workflow run. | 
**jobsUrl** | **String** | The URL to the jobs for the workflow run. | 
**logsUrl** | **String** | The URL to download the logs for the workflow run. | 
**nodeId** | **String** |  | 
**pullRequests** | [**[PullRequestMinimal]**](PullRequestMinimal.md) |  | 
**repository** | [**MinimalRepository**](MinimalRepository.md) |  | 
**rerunUrl** | **String** | The URL to rerun the workflow run. | 
**runNumber** | **Number** | The auto incrementing run number for the workflow run. | 
**status** | **String** |  | 
**updatedAt** | **Date** |  | 
**url** | **String** | The URL to the workflow run. | 
**workflowId** | **Number** | The ID of the parent workflow. | 
**workflowUrl** | **String** | The URL to the workflow. | 


