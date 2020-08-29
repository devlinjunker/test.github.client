# GitHubV3RestApi.RepositoryInvitation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** |  | 
**htmlUrl** | **String** |  | 
**id** | **Number** | Unique identifier of the repository invitation. | 
**invitee** | [**SimpleUser**](SimpleUser.md) |  | 
**inviter** | [**SimpleUser**](SimpleUser.md) |  | 
**nodeId** | **String** |  | 
**permissions** | **String** | The permission associated with the invitation. | 
**repository** | [**MinimalRepository**](MinimalRepository.md) |  | 
**url** | **String** | URL for the repository invitation | 



## Enum: PermissionsEnum


* `read` (value: `"read"`)

* `write` (value: `"write"`)

* `admin` (value: `"admin"`)




