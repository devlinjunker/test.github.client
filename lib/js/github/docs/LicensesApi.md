# GitHubV3RestApi.LicensesApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**licensesGet**](LicensesApi.md#licensesGet) | **GET** /licenses/{license} | Get a license
[**licensesGetAllCommonlyUsed**](LicensesApi.md#licensesGetAllCommonlyUsed) | **GET** /licenses | Get all commonly used licenses
[**licensesGetForRepo**](LicensesApi.md#licensesGetForRepo) | **GET** /repos/{owner}/{repo}/license | Get the license for a repository



## licensesGet

> License licensesGet(license)

Get a license

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.LicensesApi();
let license = "license_example"; // String | license parameter
apiInstance.licensesGet(license, (error, data, response) => {
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
 **license** | **String**| license parameter | 

### Return type

[**License**](License.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## licensesGetAllCommonlyUsed

> [LicenseSimple] licensesGetAllCommonlyUsed(opts)

Get all commonly used licenses

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.LicensesApi();
let opts = {
  'featured': true, // Boolean | 
  'perPage': 30 // Number | Results per page (max 100)
};
apiInstance.licensesGetAllCommonlyUsed(opts, (error, data, response) => {
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
 **featured** | **Boolean**|  | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]

### Return type

[**[LicenseSimple]**](LicenseSimple.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## licensesGetForRepo

> LicenseContent licensesGetForRepo(owner, repo)

Get the license for a repository

This method returns the contents of the repository&#39;s license file, if one is detected.  Similar to [Get repository content](https://developer.github.com/v3/repos/contents/#get-repository-content), this method also supports [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw license content or rendered license HTML.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.LicensesApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
apiInstance.licensesGetForRepo(owner, repo, (error, data, response) => {
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

[**LicenseContent**](LicenseContent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

