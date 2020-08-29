# GitHubV3RestApi.Project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body** | **String** | Body of the project | 
**cardsUrl** | **String** |  | [optional] 
**columnsUrl** | **String** |  | 
**createdAt** | **Date** |  | 
**creator** | [**SimpleUser**](SimpleUser.md) |  | 
**htmlUrl** | **String** |  | 
**id** | **Number** |  | 
**name** | **String** | Name of the project | 
**nodeId** | **String** |  | 
**_number** | **Number** |  | 
**organizationPermission** | **String** | The baseline permission that all organization members have on this project | [optional] 
**ownerUrl** | **String** |  | 
**permissions** | [**ProjectPermissions**](ProjectPermissions.md) |  | [optional] 
**_private** | **Boolean** | Whether or not this project can be seen by everyone. | [optional] 
**state** | **String** | State of the project; either &#39;open&#39; or &#39;closed&#39; | 
**updatedAt** | **Date** |  | 
**url** | **String** |  | 



## Enum: OrganizationPermissionEnum


* `read` (value: `"read"`)

* `write` (value: `"write"`)

* `admin` (value: `"admin"`)

* `none` (value: `"none"`)




