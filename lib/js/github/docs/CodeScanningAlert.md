# GitHubV3RestApi.CodeScanningAlert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closedAt** | **Date** |  | [optional] 
**closedBy** | [**SimpleUser**](SimpleUser.md) |  | [optional] 
**closedReason** | **String** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**htmlUrl** | **String** |  | [optional] 
**_number** | **Number** |  | [optional] 
**open** | **Boolean** | Whether or not the alert is open. | [optional] 
**ruleDescription** | **String** | A short description of the rule used to detect the alert. | [optional] 
**ruleId** | **String** | A unique identifier for the rule used to detect the alert. | [optional] 
**ruleSeverity** | **String** | The severity of the alert. | [optional] 
**tool** | **String** | The name of the tool used to detect the alert. | [optional] 
**url** | **String** |  | [optional] 



## Enum: ClosedReasonEnum


* `false positive` (value: `"false positive"`)

* `won&#39;t fix` (value: `"won't fix"`)

* `used in tests` (value: `"used in tests"`)





## Enum: RuleSeverityEnum


* `none` (value: `"none"`)

* `note` (value: `"note"`)

* `warning` (value: `"warning"`)

* `error` (value: `"error"`)




