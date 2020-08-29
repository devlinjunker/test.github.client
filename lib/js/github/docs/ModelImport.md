# GitHubV3RestApi.ModelImport

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorsCount** | **Number** |  | [optional] 
**authorsUrl** | **String** |  | 
**commitCount** | **Number** |  | [optional] 
**errorMessage** | **String** |  | [optional] 
**failedStep** | **String** |  | [optional] 
**hasLargeFiles** | **Boolean** |  | [optional] 
**htmlUrl** | **String** |  | 
**importPercent** | **Number** |  | [optional] 
**largeFilesCount** | **Number** |  | [optional] 
**largeFilesSize** | **Number** |  | [optional] 
**message** | **String** |  | [optional] 
**projectChoices** | [**[ImportProjectChoices]**](ImportProjectChoices.md) |  | [optional] 
**pushPercent** | **Number** |  | [optional] 
**repositoryUrl** | **String** |  | 
**status** | **String** |  | 
**statusText** | **String** |  | [optional] 
**svcRoot** | **String** |  | [optional] 
**svnRoot** | **String** |  | [optional] 
**tfvcProject** | **String** |  | [optional] 
**url** | **String** |  | 
**useLfs** | **String** |  | [optional] 
**vcs** | **String** |  | 
**vcsUrl** | **String** | The URL of the originating repository. | 



## Enum: StatusEnum


* `auth` (value: `"auth"`)

* `error` (value: `"error"`)

* `none` (value: `"none"`)

* `detecting` (value: `"detecting"`)

* `choose` (value: `"choose"`)

* `auth_failed` (value: `"auth_failed"`)

* `importing` (value: `"importing"`)

* `mapping` (value: `"mapping"`)

* `waiting_to_push` (value: `"waiting_to_push"`)

* `pushing` (value: `"pushing"`)

* `complete` (value: `"complete"`)

* `setup` (value: `"setup"`)

* `unknown` (value: `"unknown"`)

* `detection_found_multiple` (value: `"detection_found_multiple"`)

* `detection_found_nothing` (value: `"detection_found_nothing"`)

* `detection_needs_auth` (value: `"detection_needs_auth"`)




