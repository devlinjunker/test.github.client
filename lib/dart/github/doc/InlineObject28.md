# openapi.model.InlineObject28

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The description of the team. | [optional] [default to null]
**name** | **String** | The name of the team. | [default to null]
**parentTeamId** | **int** | The ID of a team to set as the parent team. | [optional] [default to null]
**permission** | **String** | **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:   \\* &#x60;pull&#x60; - team members can pull, but not push to or administer newly-added repositories.   \\* &#x60;push&#x60; - team members can pull and push, but not administer newly-added repositories.   \\* &#x60;admin&#x60; - team members can pull, push and administer newly-added repositories. | [optional] [default to &quot;pull&quot;]
**privacy** | **String** | The level of privacy this team should have. Editing teams without specifying this parameter leaves &#x60;privacy&#x60; intact. When a team is nested, the &#x60;privacy&#x60; for parent teams cannot be &#x60;secret&#x60;. The options are:   **For a non-nested team:**   \\* &#x60;secret&#x60; - only visible to organization owners and members of this team.   \\* &#x60;closed&#x60; - visible to all members of this organization.   **For a parent or child team:**   \\* &#x60;closed&#x60; - visible to all members of this organization. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


