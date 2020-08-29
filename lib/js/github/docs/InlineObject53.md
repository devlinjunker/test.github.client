# GitHubV3RestApi.InlineObject53

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**[ReposOwnerRepoCheckRunsActions]**](ReposOwnerRepoCheckRunsActions.md) | Possible further actions the integrator can perform, which a user may trigger. Each action includes a &#x60;label&#x60;, &#x60;identifier&#x60; and &#x60;description&#x60;. A maximum of three actions are accepted. See the [&#x60;actions&#x60; object](https://developer.github.com/v3/checks/runs/#actions-object) description. To learn more about check runs and requested actions, see \&quot;[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions).\&quot; | [optional] 
**completedAt** | **String** | The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
**conclusion** | **String** | **Required if you provide &#x60;completed_at&#x60; or a &#x60;status&#x60; of &#x60;completed&#x60;**. The final conclusion of the check. Can be one of &#x60;success&#x60;, &#x60;failure&#x60;, &#x60;neutral&#x60;, &#x60;cancelled&#x60;, &#x60;skipped&#x60;, &#x60;timed_out&#x60;, or &#x60;action_required&#x60;.   **Note:** Providing &#x60;conclusion&#x60; will automatically set the &#x60;status&#x60; parameter to &#x60;completed&#x60;. Only GitHub can change a check run conclusion to &#x60;stale&#x60;. | [optional] 
**detailsUrl** | **String** | The URL of the integrator&#39;s site that has the full details of the check. | [optional] 
**externalId** | **String** | A reference for the run on the integrator&#39;s system. | [optional] 
**name** | **String** | The name of the check. For example, \&quot;code-coverage\&quot;. | [optional] 
**output** | [**ReposOwnerRepoCheckRunsCheckRunIdOutput**](ReposOwnerRepoCheckRunsCheckRunIdOutput.md) |  | [optional] 
**startedAt** | **String** | This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: &#x60;YYYY-MM-DDTHH:MM:SSZ&#x60;. | [optional] 
**status** | **String** | The current status. Can be one of &#x60;queued&#x60;, &#x60;in_progress&#x60;, or &#x60;completed&#x60;. | [optional] 



## Enum: ConclusionEnum


* `success` (value: `"success"`)

* `failure` (value: `"failure"`)

* `neutral` (value: `"neutral"`)

* `cancelled` (value: `"cancelled"`)

* `skipped` (value: `"skipped"`)

* `timed_out` (value: `"timed_out"`)

* `action_required` (value: `"action_required"`)





## Enum: StatusEnum


* `queued` (value: `"queued"`)

* `in_progress` (value: `"in_progress"`)

* `completed` (value: `"completed"`)




