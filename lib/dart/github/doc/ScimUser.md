# openapi.model.ScimUser

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | The active status of the User. | [default to null]
**displayName** | **String** | The name of the user, suitable for display to end-users | [optional] [default to null]
**emails** | [**List&lt;ScimUserEmails&gt;**](ScimUserEmails.md) | user emails | [default to []]
**externalId** | **String** | The ID of the User. | [default to null]
**groups** | [**List&lt;Object&gt;**](Object.md) | associated groups | [optional] [default to []]
**id** | **String** | Unique identifier of an external identity | [default to null]
**meta** | [**ScimUserMeta**](ScimUserMeta.md) |  | [default to null]
**name** | [**ScimUserName**](ScimUserName.md) |  | [default to null]
**operations** | [**List&lt;ScimUserOperations&gt;**](ScimUserOperations.md) | Set of operations to be performed | [optional] [default to []]
**organizationId** | **int** | The ID of the organization. | [optional] [default to null]
**schemas** | **List&lt;String&gt;** | SCIM schema used. | [default to []]
**userName** | **String** | Configured by the admin. Could be an email, login, or username | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


