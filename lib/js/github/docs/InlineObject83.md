# GitHubV3RestApi.InlineObject83

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | **String** | Login for the user that this issue should be assigned to. **This field is deprecated.** | [optional] 
**assignees** | **[String]** | Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (&#x60;[]&#x60;) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._ | [optional] 
**body** | **String** | The contents of the issue. | [optional] 
**labels** | [**[OneOfstringobject]**](OneOfstringobject.md) | Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (&#x60;[]&#x60;) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._ | [optional] 
**milestone** | **Number** | The &#x60;number&#x60; of the milestone to associate this issue with or &#x60;null&#x60; to remove current. _NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise._ | [optional] 
**state** | **String** | State of the issue. Either &#x60;open&#x60; or &#x60;closed&#x60;. | [optional] 
**title** | **String** | The title of the issue. | [optional] 



## Enum: StateEnum


* `open` (value: `"open"`)

* `closed` (value: `"closed"`)




