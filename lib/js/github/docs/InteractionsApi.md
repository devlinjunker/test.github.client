# GitHubV3RestApi.InteractionsApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**interactionsGetRestrictionsForOrg**](InteractionsApi.md#interactionsGetRestrictionsForOrg) | **GET** /orgs/{org}/interaction-limits | Get interaction restrictions for an organization
[**interactionsGetRestrictionsForRepo**](InteractionsApi.md#interactionsGetRestrictionsForRepo) | **GET** /repos/{owner}/{repo}/interaction-limits | Get interaction restrictions for a repository
[**interactionsRemoveRestrictionsForOrg**](InteractionsApi.md#interactionsRemoveRestrictionsForOrg) | **DELETE** /orgs/{org}/interaction-limits | Remove interaction restrictions for an organization
[**interactionsRemoveRestrictionsForRepo**](InteractionsApi.md#interactionsRemoveRestrictionsForRepo) | **DELETE** /repos/{owner}/{repo}/interaction-limits | Remove interaction restrictions for a repository
[**interactionsSetRestrictionsForOrg**](InteractionsApi.md#interactionsSetRestrictionsForOrg) | **PUT** /orgs/{org}/interaction-limits | Set interaction restrictions for an organization
[**interactionsSetRestrictionsForRepo**](InteractionsApi.md#interactionsSetRestrictionsForRepo) | **PUT** /repos/{owner}/{repo}/interaction-limits | Set interaction restrictions for a repository



## interactionsGetRestrictionsForOrg

> InteractionLimit interactionsGetRestrictionsForOrg(org)

Get interaction restrictions for an organization

Shows which group of GitHub users can interact with this organization and when the restriction expires. If there are no restrictions, you will see an empty response.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.InteractionsApi();
let org = "org_example"; // String | 
apiInstance.interactionsGetRestrictionsForOrg(org, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 

### Return type

[**InteractionLimit**](InteractionLimit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## interactionsGetRestrictionsForRepo

> InteractionLimit interactionsGetRestrictionsForRepo(owner, repo)

Get interaction restrictions for a repository

Shows which group of GitHub users can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.InteractionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.interactionsGetRestrictionsForRepo(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 

### Return type

[**InteractionLimit**](InteractionLimit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## interactionsRemoveRestrictionsForOrg

> interactionsRemoveRestrictionsForOrg(org)

Remove interaction restrictions for an organization

Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.InteractionsApi();
let org = "org_example"; // String | 
apiInstance.interactionsRemoveRestrictionsForOrg(org, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## interactionsRemoveRestrictionsForRepo

> interactionsRemoveRestrictionsForRepo(owner, repo)

Remove interaction restrictions for a repository

Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.InteractionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.interactionsRemoveRestrictionsForRepo(owner, repo, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## interactionsSetRestrictionsForOrg

> InteractionLimit interactionsSetRestrictionsForOrg(org, opts)

Set interaction restrictions for an organization

Temporarily restricts interactions to certain GitHub users in any public repository in the given organization. You must be an organization owner to set these restrictions.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.InteractionsApi();
let org = "org_example"; // String | 
let opts = {
  'inlineObject21': new GitHubV3RestApi.InlineObject21() // InlineObject21 | 
};
apiInstance.interactionsSetRestrictionsForOrg(org, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org** | **String**|  | 
 **inlineObject21** | [**InlineObject21**](InlineObject21.md)|  | [optional] 

### Return type

[**InteractionLimit**](InteractionLimit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## interactionsSetRestrictionsForRepo

> InteractionLimit interactionsSetRestrictionsForRepo(owner, repo, opts)

Set interaction restrictions for a repository

Temporarily restricts interactions to certain GitHub users within the given repository. You must have owner or admin access to set restrictions.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.InteractionsApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject78': new GitHubV3RestApi.InlineObject78() // InlineObject78 | 
};
apiInstance.interactionsSetRestrictionsForRepo(owner, repo, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | 
 **repo** | **String**|  | 
 **inlineObject78** | [**InlineObject78**](InlineObject78.md)|  | [optional] 

### Return type

[**InteractionLimit**](InteractionLimit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

