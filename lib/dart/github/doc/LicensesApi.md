# openapi.api.LicensesApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**licensesGet**](LicensesApi.md#licensesGet) | **GET** /licenses/{license} | Get a license
[**licensesGetAllCommonlyUsed**](LicensesApi.md#licensesGetAllCommonlyUsed) | **GET** /licenses | Get all commonly used licenses
[**licensesGetForRepo**](LicensesApi.md#licensesGetForRepo) | **GET** /repos/{owner}/{repo}/license | Get the license for a repository


# **licensesGet**
> License licensesGet(license)

Get a license

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = LicensesApi();
var license = license_example; // String | license parameter

try { 
    var result = api_instance.licensesGet(license);
    print(result);
} catch (e) {
    print("Exception when calling LicensesApi->licensesGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **license** | **String**| license parameter | [default to null]

### Return type

[**License**](License.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **licensesGetAllCommonlyUsed**
> List<LicenseSimple> licensesGetAllCommonlyUsed(featured, perPage)

Get all commonly used licenses

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = LicensesApi();
var featured = true; // bool | 
var perPage = 56; // int | Results per page (max 100)

try { 
    var result = api_instance.licensesGetAllCommonlyUsed(featured, perPage);
    print(result);
} catch (e) {
    print("Exception when calling LicensesApi->licensesGetAllCommonlyUsed: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **featured** | **bool**|  | [optional] [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]

### Return type

[**List<LicenseSimple>**](LicenseSimple.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **licensesGetForRepo**
> LicenseContent licensesGetForRepo(owner, repo)

Get the license for a repository

This method returns the contents of the repository's license file, if one is detected.  Similar to [Get repository content](https://developer.github.com/v3/repos/contents/#get-repository-content), this method also supports [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw license content or rendered license HTML.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = LicensesApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 

try { 
    var result = api_instance.licensesGetForRepo(owner, repo);
    print(result);
} catch (e) {
    print("Exception when calling LicensesApi->licensesGetForRepo: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]

### Return type

[**LicenseContent**](LicenseContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

