# GitHubV3RestApi.ScimUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | The active status of the User. | 
**displayName** | **String** | The name of the user, suitable for display to end-users | [optional] 
**emails** | [**[ScimUserEmails]**](ScimUserEmails.md) | user emails | 
**externalId** | **String** | The ID of the User. | 
**groups** | **[Object]** | associated groups | [optional] 
**id** | **String** | Unique identifier of an external identity | 
**meta** | [**ScimUserMeta**](ScimUserMeta.md) |  | 
**name** | [**ScimUserName**](ScimUserName.md) |  | 
**operations** | [**[ScimUserOperations]**](ScimUserOperations.md) | Set of operations to be performed | [optional] 
**organizationId** | **Number** | The ID of the organization. | [optional] 
**schemas** | **[String]** | SCIM schema used. | 
**userName** | **String** | Configured by the admin. Could be an email, login, or username | 


