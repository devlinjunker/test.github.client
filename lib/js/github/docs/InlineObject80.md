# GitHubV3RestApi.InlineObject80

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | **String** | Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_ | [optional] 
**assignees** | **[String]** | Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._ | [optional] 
**body** | **String** | The contents of the issue. | [optional] 
**labels** | [**[OneOfstringobject]**](OneOfstringobject.md) | Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._ | [optional] 
**milestone** | **Number** | The &#x60;number&#x60; of the milestone to associate this issue with. _NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise._ | [optional] 
**title** | **String** | The title of the issue. | 


