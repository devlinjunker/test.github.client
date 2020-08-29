# GitHubV3RestApi.CodeScanningApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**codeScanningGetAlert**](CodeScanningApi.md#codeScanningGetAlert) | **GET** /repos/{owner}/{repo}/code-scanning/alerts/{alert_id} | Get a code scanning alert
[**codeScanningListAlertsForRepo**](CodeScanningApi.md#codeScanningListAlertsForRepo) | **GET** /repos/{owner}/{repo}/code-scanning/alerts | List code scanning alerts for a repository



## codeScanningGetAlert

> CodeScanningAlert codeScanningGetAlert(owner, repo, alertId)

Get a code scanning alert

Gets a single code scanning alert. You must use an access token with the &#x60;security_events&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;security_events&#x60; read permission to use this endpoint.  The security &#x60;alert_id&#x60; is found at the end of the security alert&#39;s URL. For example, the security alert ID for &#x60;https://github.com/Octo-org/octo-repo/security/code-scanning/88&#x60; is &#x60;88&#x60;.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.CodeScanningApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let alertId = 56; // Number | alert_id parameter
apiInstance.codeScanningGetAlert(owner, repo, alertId, (error, data, response) => {
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
 **alertId** | **Number**| alert_id parameter | 

### Return type

[**CodeScanningAlert**](CodeScanningAlert.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## codeScanningListAlertsForRepo

> [CodeScanningAlert] codeScanningListAlertsForRepo(owner, repo, opts)

List code scanning alerts for a repository

Lists all open code scanning alerts for the default branch (usually &#x60;master&#x60;) and protected branches in a repository. You must use an access token with the &#x60;security_events&#x60; scope to use this endpoint. GitHub Apps must have the &#x60;security_events&#x60; read permission to use this endpoint.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.CodeScanningApi();
let owner = "owner_example"; // String | 
let repo = "repo_example"; // String | 
let opts = {
  'state': "'open'", // String | Set to `closed` to list only closed code scanning alerts.
  'ref': "ref_example" // String | Returns a list of code scanning alerts for a specific brach reference. The `ref` must be formatted as `heads/<branch name>`.
};
apiInstance.codeScanningListAlertsForRepo(owner, repo, opts, (error, data, response) => {
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
 **state** | **String**| Set to &#x60;closed&#x60; to list only closed code scanning alerts. | [optional] [default to &#39;open&#39;]
 **ref** | **String**| Returns a list of code scanning alerts for a specific brach reference. The &#x60;ref&#x60; must be formatted as &#x60;heads/&lt;branch name&gt;&#x60;. | [optional] 

### Return type

[**[CodeScanningAlert]**](CodeScanningAlert.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

