# openapi.api.ChecksApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checksCreate**](ChecksApi.md#checksCreate) | **POST** /repos/{owner}/{repo}/check-runs | Create a check run
[**checksCreateSuite**](ChecksApi.md#checksCreateSuite) | **POST** /repos/{owner}/{repo}/check-suites | Create a check suite
[**checksGet**](ChecksApi.md#checksGet) | **GET** /repos/{owner}/{repo}/check-runs/{check_run_id} | Get a check run
[**checksGetSuite**](ChecksApi.md#checksGetSuite) | **GET** /repos/{owner}/{repo}/check-suites/{check_suite_id} | Get a check suite
[**checksListAnnotations**](ChecksApi.md#checksListAnnotations) | **GET** /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations | List check run annotations
[**checksListForRef**](ChecksApi.md#checksListForRef) | **GET** /repos/{owner}/{repo}/commits/{ref}/check-runs | List check runs for a Git reference
[**checksListForSuite**](ChecksApi.md#checksListForSuite) | **GET** /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs | List check runs in a check suite
[**checksListSuitesForRef**](ChecksApi.md#checksListSuitesForRef) | **GET** /repos/{owner}/{repo}/commits/{ref}/check-suites | List check suites for a Git reference
[**checksRerequestSuite**](ChecksApi.md#checksRerequestSuite) | **POST** /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest | Rerequest a check suite
[**checksSetSuitesPreferences**](ChecksApi.md#checksSetSuitesPreferences) | **PATCH** /repos/{owner}/{repo}/check-suites/preferences | Update repository preferences for check suites
[**checksUpdate**](ChecksApi.md#checksUpdate) | **PATCH** /repos/{owner}/{repo}/check-runs/{check_run_id} | Update a check run


# **checksCreate**
> CheckRun checksCreate(owner, repo, inlineObject52)

Create a check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var inlineObject52 = InlineObject52(); // InlineObject52 | 

try { 
    var result = api_instance.checksCreate(owner, repo, inlineObject52);
    print(result);
} catch (e) {
    print("Exception when calling ChecksApi->checksCreate: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **inlineObject52** | [**InlineObject52**](InlineObject52.md)|  | [optional] 

### Return type

[**CheckRun**](CheckRun.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checksCreateSuite**
> CheckSuite checksCreateSuite(owner, repo, inlineObject54)

Create a check suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.  By default, check suites are automatically created when you create a [check run](https://developer.github.com/v3/checks/runs/). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using \"[Update repository preferences for check suites](https://developer.github.com/v3/checks/suites/#update-repository-preferences-for-check-suites)\". Your GitHub App must have the `checks:write` permission to create check suites.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var inlineObject54 = InlineObject54(); // InlineObject54 | 

try { 
    var result = api_instance.checksCreateSuite(owner, repo, inlineObject54);
    print(result);
} catch (e) {
    print("Exception when calling ChecksApi->checksCreateSuite: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **inlineObject54** | [**InlineObject54**](InlineObject54.md)|  | [optional] 

### Return type

[**CheckSuite**](CheckSuite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checksGet**
> CheckRun checksGet(owner, repo, checkRunId)

Get a check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var checkRunId = 56; // int | check_run_id parameter

try { 
    var result = api_instance.checksGet(owner, repo, checkRunId);
    print(result);
} catch (e) {
    print("Exception when calling ChecksApi->checksGet: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **checkRunId** | **int**| check_run_id parameter | [default to null]

### Return type

[**CheckRun**](CheckRun.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checksGetSuite**
> CheckSuite checksGetSuite(owner, repo, checkSuiteId)

Get a check suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.  Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var checkSuiteId = 56; // int | check_suite_id parameter

try { 
    var result = api_instance.checksGetSuite(owner, repo, checkSuiteId);
    print(result);
} catch (e) {
    print("Exception when calling ChecksApi->checksGetSuite: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **checkSuiteId** | **int**| check_suite_id parameter | [default to null]

### Return type

[**CheckSuite**](CheckSuite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checksListAnnotations**
> List<CheckAnnotation> checksListAnnotations(owner, repo, checkRunId, perPage, page)

List check run annotations

Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var checkRunId = 56; // int | check_run_id parameter
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.checksListAnnotations(owner, repo, checkRunId, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ChecksApi->checksListAnnotations: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **checkRunId** | **int**| check_run_id parameter | [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**List<CheckAnnotation>**](CheckAnnotation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checksListForRef**
> InlineResponse20011 checksListForRef(owner, repo, ref, checkName, status, filter, perPage, page)

List check runs for a Git reference

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var ref = ref_example; // String | ref+ parameter
var checkName = checkName_example; // String | Returns check runs with the specified `name`.
var status = status_example; // String | Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
var filter = filter_example; // String | Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.checksListForRef(owner, repo, ref, checkName, status, filter, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ChecksApi->checksListForRef: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **ref** | **String**| ref+ parameter | [default to null]
 **checkName** | **String**| Returns check runs with the specified &#x60;name&#x60;. | [optional] [default to null]
 **status** | **String**| Returns check runs with the specified &#x60;status&#x60;. Can be one of &#x60;queued&#x60;, &#x60;in_progress&#x60;, or &#x60;completed&#x60;. | [optional] [default to null]
 **filter** | **String**| Filters check runs by their &#x60;completed_at&#x60; timestamp. Can be one of &#x60;latest&#x60; (returning the most recent check runs) or &#x60;all&#x60;. | [optional] [default to &quot;latest&quot;]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checksListForSuite**
> InlineResponse20011 checksListForSuite(owner, repo, checkSuiteId, checkName, status, filter, perPage, page)

List check runs in a check suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var checkSuiteId = 56; // int | check_suite_id parameter
var checkName = checkName_example; // String | Returns check runs with the specified `name`.
var status = status_example; // String | Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
var filter = filter_example; // String | Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.checksListForSuite(owner, repo, checkSuiteId, checkName, status, filter, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ChecksApi->checksListForSuite: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **checkSuiteId** | **int**| check_suite_id parameter | [default to null]
 **checkName** | **String**| Returns check runs with the specified &#x60;name&#x60;. | [optional] [default to null]
 **status** | **String**| Returns check runs with the specified &#x60;status&#x60;. Can be one of &#x60;queued&#x60;, &#x60;in_progress&#x60;, or &#x60;completed&#x60;. | [optional] [default to null]
 **filter** | **String**| Filters check runs by their &#x60;completed_at&#x60; timestamp. Can be one of &#x60;latest&#x60; (returning the most recent check runs) or &#x60;all&#x60;. | [optional] [default to &quot;latest&quot;]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checksListSuitesForRef**
> InlineResponse20012 checksListSuitesForRef(owner, repo, ref, appId, checkName, perPage, page)

List check suites for a Git reference

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.  Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var ref = ref_example; // String | ref+ parameter
var appId = 1; // int | Filters check suites by GitHub App `id`.
var checkName = checkName_example; // String | Returns check runs with the specified `name`.
var perPage = 56; // int | Results per page (max 100)
var page = 56; // int | Page number of the results to fetch.

try { 
    var result = api_instance.checksListSuitesForRef(owner, repo, ref, appId, checkName, perPage, page);
    print(result);
} catch (e) {
    print("Exception when calling ChecksApi->checksListSuitesForRef: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **ref** | **String**| ref+ parameter | [default to null]
 **appId** | **int**| Filters check suites by GitHub App &#x60;id&#x60;. | [optional] [default to null]
 **checkName** | **String**| Returns check runs with the specified &#x60;name&#x60;. | [optional] [default to null]
 **perPage** | **int**| Results per page (max 100) | [optional] [default to 30]
 **page** | **int**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checksRerequestSuite**
> checksRerequestSuite(owner, repo, checkSuiteId)

Rerequest a check suite

Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://developer.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.  To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var checkSuiteId = 56; // int | check_suite_id parameter

try { 
    api_instance.checksRerequestSuite(owner, repo, checkSuiteId);
} catch (e) {
    print("Exception when calling ChecksApi->checksRerequestSuite: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **checkSuiteId** | **int**| check_suite_id parameter | [default to null]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checksSetSuitesPreferences**
> CheckSuitePreference checksSetSuitesPreferences(owner, repo, inlineObject55)

Update repository preferences for check suites

Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://developer.github.com/v3/checks/suites/#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var inlineObject55 = InlineObject55(); // InlineObject55 | 

try { 
    var result = api_instance.checksSetSuitesPreferences(owner, repo, inlineObject55);
    print(result);
} catch (e) {
    print("Exception when calling ChecksApi->checksSetSuitesPreferences: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **inlineObject55** | [**InlineObject55**](InlineObject55.md)|  | [optional] 

### Return type

[**CheckSuitePreference**](CheckSuitePreference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checksUpdate**
> CheckRun checksUpdate(owner, repo, checkRunId, inlineObject53)

Update a check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = ChecksApi();
var owner = owner_example; // String | 
var repo = repo_example; // String | 
var checkRunId = 56; // int | check_run_id parameter
var inlineObject53 = InlineObject53(); // InlineObject53 | 

try { 
    var result = api_instance.checksUpdate(owner, repo, checkRunId, inlineObject53);
    print(result);
} catch (e) {
    print("Exception when calling ChecksApi->checksUpdate: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner** | **String**|  | [default to null]
 **repo** | **String**|  | [default to null]
 **checkRunId** | **int**| check_run_id parameter | [default to null]
 **inlineObject53** | [**InlineObject53**](InlineObject53.md)|  | [optional] 

### Return type

[**CheckRun**](CheckRun.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

