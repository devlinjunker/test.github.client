# openapi.model.InlineObject80

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | **String** | Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_ | [optional] [default to null]
**assignees** | **List&lt;String&gt;** | Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._ | [optional] [default to []]
**body** | **String** | The contents of the issue. | [optional] [default to null]
**labels** | [**List&lt;OneOf&lt;string,object&gt;&gt;**](OneOf&lt;string,object&gt;.md) | Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._ | [optional] [default to []]
**milestone** | **int** | The &#x60;number&#x60; of the milestone to associate this issue with. _NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise._ | [optional] [default to null]
**title** | **String** | The title of the issue. | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


