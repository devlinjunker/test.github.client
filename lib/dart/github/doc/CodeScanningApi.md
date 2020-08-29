# openapi.api.CodeScanningApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**codeScanningGetAlert**](CodeScanningApi.md#codeScanningGetAlert) | **GET** /repos/{owner}/{repo}/code-scanning/alerts/{alert_id} | Get a code scanning alert
[**codeScanningListAlertsForRepo**](CodeScanningApi.md#codeScanningListAlertsForRepo) | **GET** /repos/{owner}/{repo}/code-scanning/alerts | List code scanning alerts for a repository


# **codeScanningGetAlert**
> CodeScanningAlert codeScanningGetAlert(owner, repo, alertId)

Get a code scanning alert

Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.  The security `alert_id` is found at the end of the security alert's URL. For example, the security alert ID for `https://github.com/Octo-org/octo-repo/security/code-scanning/88` is `88`.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = CodeScanningApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var alertId = 56; // int | alert_id parameter

try { 
    var result = api_instance.codeScanningGetAlert(owner, repo, alertId);
    print(result);
} catch (e) {
    print("Exception when calling CodeScanningApi->codeScanningGetAlert: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **alertId** | **int**| alert_id parameter | [default to null]

### Return type

[**CodeScanningAlert**](CodeScanningAlert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **codeScanningListAlertsForRepo**
> List<CodeScanningAlert> codeScanningListAlertsForRepo(owner, repo, state, ref)

List code scanning alerts for a repository

Lists all open code scanning alerts for the default branch (usually `master`) and protected branches in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = CodeScanningApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var state = state_example; // String | Set to `closed` to list only closed code scanning alerts.
var ref = ref_example; // String | Returns a list of code scanning alerts for a specific brach reference. The `ref` must be formatted as `heads/<branch name>`.

try { 
    var result = api_instance.codeScanningListAlertsForRepo(owner, repo, state, ref);
    print(result);
} catch (e) {
    print("Exception when calling CodeScanningApi->codeScanningListAlertsForRepo: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **state** | **String**| Set to &#x60;closed&#x60; to list only closed code scanning alerts. | [optional] [default to &quot;open&quot;]
 **ref** | **String**| Returns a list of code scanning alerts for a specific brach reference. The &#x60;ref&#x60; must be formatted as &#x60;heads/&lt;branch name&gt;&#x60;. | [optional] [default to null]

### Return type

[**List<CodeScanningAlert>**](CodeScanningAlert.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

