# GitHubV3RestApi.CodesOfConductApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**codesOfConductGetAllCodesOfConduct**](CodesOfConductApi.md#codesOfConductGetAllCodesOfConduct) | **GET** /codes_of_conduct | Get all codes of conduct
[**codesOfConductGetConductCode**](CodesOfConductApi.md#codesOfConductGetConductCode) | **GET** /codes_of_conduct/{key} | Get a code of conduct
[**codesOfConductGetForRepo**](CodesOfConductApi.md#codesOfConductGetForRepo) | **GET** /repos/{owner}/{repo}/community/code_of_conduct | Get the code of conduct for a repository



## codesOfConductGetAllCodesOfConduct

> [CodeOfConduct] codesOfConductGetAllCodesOfConduct()

Get all codes of conduct

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.CodesOfConductApi();
apiInstance.codesOfConductGetAllCodesOfConduct((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CodeOfConduct]**](CodeOfConduct.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## codesOfConductGetConductCode

> CodeOfConduct codesOfConductGetConductCode(key)

Get a code of conduct

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.CodesOfConductApi();
let key = "key_example"; // String | key parameter
apiInstance.codesOfConductGetConductCode(key, (error, data, response) => {
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
 **key** | **String**| key parameter | 

### Return type

[**CodeOfConduct**](CodeOfConduct.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## codesOfConductGetForRepo

> CodeOfConduct codesOfConductGetForRepo(owner, repo)

Get the code of conduct for a repository

This method returns the contents of the repository&#39;s code of conduct file, if one is detected.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.CodesOfConductApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.codesOfConductGetForRepo(owner, repo, (error, data, response) => {
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

[**CodeOfConduct**](CodeOfConduct.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

