# GitHubV3RestApi.ChecksApi

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



## checksCreate

> CheckRun checksCreate(owner, repo, opts)

Create a check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty &#x60;pull_requests&#x60; array.  Creates a new check run for a specific commit in a repository. Your GitHub App must have the &#x60;checks:write&#x60; permission to create check runs.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject52': new GitHubV3RestApi.InlineObject52() // InlineObject52 | 
};
apiInstance.checksCreate(owner, repo, opts, (error, data, response) => {
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
 **inlineObject52** | [**InlineObject52**](InlineObject52.md)|  | [optional] 

### Return type

[**CheckRun**](CheckRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## checksCreateSuite

> CheckSuite checksCreateSuite(owner, repo, opts)

Create a check suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty &#x60;pull_requests&#x60; array and a &#x60;null&#x60; value for &#x60;head_branch&#x60;.  By default, check suites are automatically created when you create a [check run](https://developer.github.com/v3/checks/runs/). You only need to use this endpoint for manually creating check suites when you&#39;ve disabled automatic creation using \&quot;[Update repository preferences for check suites](https://developer.github.com/v3/checks/suites/#update-repository-preferences-for-check-suites)\&quot;. Your GitHub App must have the &#x60;checks:write&#x60; permission to create check suites.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject54': new GitHubV3RestApi.InlineObject54() // InlineObject54 | 
};
apiInstance.checksCreateSuite(owner, repo, opts, (error, data, response) => {
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
 **inlineObject54** | [**InlineObject54**](InlineObject54.md)|  | [optional] 

### Return type

[**CheckSuite**](CheckSuite.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## checksGet

> CheckRun checksGet(owner, repo, checkRunId)

Get a check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty &#x60;pull_requests&#x60; array.  Gets a single check run using its &#x60;id&#x60;. GitHub Apps must have the &#x60;checks:read&#x60; permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the &#x60;repo&#x60; scope to get check runs in a private repository.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let checkRunId = 56; // Number | check_run_id parameter
apiInstance.checksGet(owner, repo, checkRunId, (error, data, response) => {
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
 **checkRunId** | **Number**| check_run_id parameter | 

### Return type

[**CheckRun**](CheckRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checksGetSuite

> CheckSuite checksGetSuite(owner, repo, checkSuiteId)

Get a check suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty &#x60;pull_requests&#x60; array and a &#x60;null&#x60; value for &#x60;head_branch&#x60;.  Gets a single check suite using its &#x60;id&#x60;. GitHub Apps must have the &#x60;checks:read&#x60; permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the &#x60;repo&#x60; scope to get check suites in a private repository.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let checkSuiteId = 56; // Number | check_suite_id parameter
apiInstance.checksGetSuite(owner, repo, checkSuiteId, (error, data, response) => {
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
 **checkSuiteId** | **Number**| check_suite_id parameter | 

### Return type

[**CheckSuite**](CheckSuite.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checksListAnnotations

> [CheckAnnotation] checksListAnnotations(owner, repo, checkRunId, opts)

List check run annotations

Lists annotations for a check run using the annotation &#x60;id&#x60;. GitHub Apps must have the &#x60;checks:read&#x60; permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the &#x60;repo&#x60; scope to get annotations for a check run in a private repository.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let checkRunId = 56; // Number | check_run_id parameter
let opts = {
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.checksListAnnotations(owner, repo, checkRunId, opts, (error, data, response) => {
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
 **checkRunId** | **Number**| check_run_id parameter | 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**[CheckAnnotation]**](CheckAnnotation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checksListForRef

> InlineResponse20011 checksListForRef(owner, repo, ref, opts)

List check runs for a Git reference

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty &#x60;pull_requests&#x60; array.  Lists check runs for a commit ref. The &#x60;ref&#x60; can be a SHA, branch name, or a tag name. GitHub Apps must have the &#x60;checks:read&#x60; permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the &#x60;repo&#x60; scope to get check runs in a private repository.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let ref = "ref_example"; // String | ref+ parameter
let opts = {
  'checkName': "checkName_example", // String | Returns check runs with the specified `name`.
  'status': "status_example", // String | Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
  'filter': "'latest'", // String | Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.checksListForRef(owner, repo, ref, opts, (error, data, response) => {
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
 **ref** | **String**| ref+ parameter | 
 **checkName** | **String**| Returns check runs with the specified &#x60;name&#x60;. | [optional] 
 **status** | **String**| Returns check runs with the specified &#x60;status&#x60;. Can be one of &#x60;queued&#x60;, &#x60;in_progress&#x60;, or &#x60;completed&#x60;. | [optional] 
 **filter** | **String**| Filters check runs by their &#x60;completed_at&#x60; timestamp. Can be one of &#x60;latest&#x60; (returning the most recent check runs) or &#x60;all&#x60;. | [optional] [default to &#39;latest&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checksListForSuite

> InlineResponse20011 checksListForSuite(owner, repo, checkSuiteId, opts)

List check runs in a check suite

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty &#x60;pull_requests&#x60; array.  Lists check runs for a check suite using its &#x60;id&#x60;. GitHub Apps must have the &#x60;checks:read&#x60; permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the &#x60;repo&#x60; scope to get check runs in a private repository.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let checkSuiteId = 56; // Number | check_suite_id parameter
let opts = {
  'checkName': "checkName_example", // String | Returns check runs with the specified `name`.
  'status': "status_example", // String | Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
  'filter': "'latest'", // String | Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.checksListForSuite(owner, repo, checkSuiteId, opts, (error, data, response) => {
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
 **checkSuiteId** | **Number**| check_suite_id parameter | 
 **checkName** | **String**| Returns check runs with the specified &#x60;name&#x60;. | [optional] 
 **status** | **String**| Returns check runs with the specified &#x60;status&#x60;. Can be one of &#x60;queued&#x60;, &#x60;in_progress&#x60;, or &#x60;completed&#x60;. | [optional] 
 **filter** | **String**| Filters check runs by their &#x60;completed_at&#x60; timestamp. Can be one of &#x60;latest&#x60; (returning the most recent check runs) or &#x60;all&#x60;. | [optional] [default to &#39;latest&#39;]
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checksListSuitesForRef

> InlineResponse20012 checksListSuitesForRef(owner, repo, ref, opts)

List check suites for a Git reference

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty &#x60;pull_requests&#x60; array and a &#x60;null&#x60; value for &#x60;head_branch&#x60;.  Lists check suites for a commit &#x60;ref&#x60;. The &#x60;ref&#x60; can be a SHA, branch name, or a tag name. GitHub Apps must have the &#x60;checks:read&#x60; permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the &#x60;repo&#x60; scope to get check suites in a private repository.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let ref = "ref_example"; // String | ref+ parameter
let opts = {
  'appId': 1, // Number | Filters check suites by GitHub App `id`.
  'checkName': "checkName_example", // String | Returns check runs with the specified `name`.
  'perPage': 30, // Number | Results per page (max 100)
  'page': 1 // Number | Page number of the results to fetch.
};
apiInstance.checksListSuitesForRef(owner, repo, ref, opts, (error, data, response) => {
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
 **ref** | **String**| ref+ parameter | 
 **appId** | **Number**| Filters check suites by GitHub App &#x60;id&#x60;. | [optional] 
 **checkName** | **String**| Returns check runs with the specified &#x60;name&#x60;. | [optional] 
 **perPage** | **Number**| Results per page (max 100) | [optional] [default to 30]
 **page** | **Number**| Page number of the results to fetch. | [optional] [default to 1]

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## checksRerequestSuite

> checksRerequestSuite(owner, repo, checkSuiteId)

Rerequest a check suite

Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [&#x60;check_suite&#x60; webhook](https://developer.github.com/webhooks/event-payloads/#check_suite) event with the action &#x60;rerequested&#x60;. When a check suite is &#x60;rerequested&#x60;, its &#x60;status&#x60; is reset to &#x60;queued&#x60; and the &#x60;conclusion&#x60; is cleared.  To rerequest a check suite, your GitHub App must have the &#x60;checks:read&#x60; permission on a private repository or pull access to a public repository.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let checkSuiteId = 56; // Number | check_suite_id parameter
apiInstance.checksRerequestSuite(owner, repo, checkSuiteId, (error, data, response) => {
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
 **checkSuiteId** | **Number**| check_suite_id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## checksSetSuitesPreferences

> CheckSuitePreference checksSetSuitesPreferences(owner, repo, opts)

Update repository preferences for check suites

Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://developer.github.com/v3/checks/suites/#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'inlineObject55': new GitHubV3RestApi.InlineObject55() // InlineObject55 | 
};
apiInstance.checksSetSuitesPreferences(owner, repo, opts, (error, data, response) => {
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
 **inlineObject55** | [**InlineObject55**](InlineObject55.md)|  | [optional] 

### Return type

[**CheckSuitePreference**](CheckSuitePreference.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## checksUpdate

> CheckRun checksUpdate(owner, repo, checkRunId, opts)

Update a check run

**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty &#x60;pull_requests&#x60; array.  Updates a check run for a specific commit in a repository. Your GitHub App must have the &#x60;checks:write&#x60; permission to edit check runs.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.ChecksApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let checkRunId = 56; // Number | check_run_id parameter
let opts = {
  'inlineObject53': new GitHubV3RestApi.InlineObject53() // InlineObject53 | 
};
apiInstance.checksUpdate(owner, repo, checkRunId, opts, (error, data, response) => {
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
 **checkRunId** | **Number**| check_run_id parameter | 
 **inlineObject53** | [**InlineObject53**](InlineObject53.md)|  | [optional] 

### Return type

[**CheckRun**](CheckRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

