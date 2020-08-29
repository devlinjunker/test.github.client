# GitHubV3RestApi.BillingApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billingGetGithubActionsBillingGhe**](BillingApi.md#billingGetGithubActionsBillingGhe) | **GET** /enterprises/{enterprise_id}/settings/billing/actions | Get GitHub Actions billing for an enterprise
[**billingGetGithubActionsBillingOrg**](BillingApi.md#billingGetGithubActionsBillingOrg) | **GET** /orgs/{org}/settings/billing/actions | Get GitHub Actions billing for an organization
[**billingGetGithubActionsBillingUser**](BillingApi.md#billingGetGithubActionsBillingUser) | **GET** /users/{username}/settings/billing/actions | Get GitHub Actions billing for a user
[**billingGetGithubPackagesBillingGhe**](BillingApi.md#billingGetGithubPackagesBillingGhe) | **GET** /enterprises/{enterprise_id}/settings/billing/packages | Get GitHub Packages billing for an enterprise
[**billingGetGithubPackagesBillingOrg**](BillingApi.md#billingGetGithubPackagesBillingOrg) | **GET** /orgs/{org}/settings/billing/packages | Get GitHub Packages billing for an organization
[**billingGetGithubPackagesBillingUser**](BillingApi.md#billingGetGithubPackagesBillingUser) | **GET** /users/{username}/settings/billing/packages | Get GitHub Packages billing for a user
[**billingGetSharedStorageBillingGhe**](BillingApi.md#billingGetSharedStorageBillingGhe) | **GET** /enterprises/{enterprise_id}/settings/billing/shared-storage | Get shared storage billing for an enterprise
[**billingGetSharedStorageBillingOrg**](BillingApi.md#billingGetSharedStorageBillingOrg) | **GET** /orgs/{org}/settings/billing/shared-storage | Get shared storage billing for an organization
[**billingGetSharedStorageBillingUser**](BillingApi.md#billingGetSharedStorageBillingUser) | **GET** /users/{username}/settings/billing/shared-storage | Get shared storage billing for a user



## billingGetGithubActionsBillingGhe

> ActionsBillingUsage billingGetGithubActionsBillingGhe(enterpriseId)

Get GitHub Actions billing for an enterprise

**Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  The authenticated user must be an enterprise admin.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.BillingApi();
let enterpriseId = "enterpriseId_example"; // String | Unique identifier of the GitHub Enterprise Cloud instance.
apiInstance.billingGetGithubActionsBillingGhe(enterpriseId, (error, data, response) => {
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
 **enterpriseId** | **String**| Unique identifier of the GitHub Enterprise Cloud instance. | 

### Return type

[**ActionsBillingUsage**](ActionsBillingUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingGetGithubActionsBillingOrg

> ActionsBillingUsage billingGetGithubActionsBillingOrg(org)

Get GitHub Actions billing for an organization

**Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  Access tokens must have the &#x60;read:org&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.BillingApi();
let org = "org_example"; // String | 
apiInstance.billingGetGithubActionsBillingOrg(org, (error, data, response) => {
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

[**ActionsBillingUsage**](ActionsBillingUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingGetGithubActionsBillingUser

> ActionsBillingUsage billingGetGithubActionsBillingUser(username)

Get GitHub Actions billing for a user

**Warning:** The Billing API is currently in public beta and subject to change.  Gets the summary of the free and paid GitHub Actions minutes used.  Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \&quot;[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\&quot;.  Access tokens must have the &#x60;user&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.BillingApi();
let username = "username_example"; // String | 
apiInstance.billingGetGithubActionsBillingUser(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

[**ActionsBillingUsage**](ActionsBillingUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingGetGithubPackagesBillingGhe

> PackagesBillingUsage billingGetGithubPackagesBillingGhe(enterpriseId)

Get GitHub Packages billing for an enterprise

**Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage used for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  The authenticated user must be an enterprise admin.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.BillingApi();
let enterpriseId = "enterpriseId_example"; // String | Unique identifier of the GitHub Enterprise Cloud instance.
apiInstance.billingGetGithubPackagesBillingGhe(enterpriseId, (error, data, response) => {
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
 **enterpriseId** | **String**| Unique identifier of the GitHub Enterprise Cloud instance. | 

### Return type

[**PackagesBillingUsage**](PackagesBillingUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingGetGithubPackagesBillingOrg

> PackagesBillingUsage billingGetGithubPackagesBillingOrg(org)

Get GitHub Packages billing for an organization

**Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage usued for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;read:org&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.BillingApi();
let org = "org_example"; // String | 
apiInstance.billingGetGithubPackagesBillingOrg(org, (error, data, response) => {
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

[**PackagesBillingUsage**](PackagesBillingUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingGetGithubPackagesBillingUser

> PackagesBillingUsage billingGetGithubPackagesBillingUser(username)

Get GitHub Packages billing for a user

**Warning:** The Billing API is currently in public beta and subject to change.  Gets the free and paid storage used for GitHub Packages in gigabytes.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;user&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.BillingApi();
let username = "username_example"; // String | 
apiInstance.billingGetGithubPackagesBillingUser(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

[**PackagesBillingUsage**](PackagesBillingUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingGetSharedStorageBillingGhe

> CombinedBillingUsage billingGetSharedStorageBillingGhe(enterpriseId)

Get shared storage billing for an enterprise

**Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  The authenticated user must be an enterprise admin.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.BillingApi();
let enterpriseId = "enterpriseId_example"; // String | Unique identifier of the GitHub Enterprise Cloud instance.
apiInstance.billingGetSharedStorageBillingGhe(enterpriseId, (error, data, response) => {
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
 **enterpriseId** | **String**| Unique identifier of the GitHub Enterprise Cloud instance. | 

### Return type

[**CombinedBillingUsage**](CombinedBillingUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingGetSharedStorageBillingOrg

> CombinedBillingUsage billingGetSharedStorageBillingOrg(org)

Get shared storage billing for an organization

**Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;read:org&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.BillingApi();
let org = "org_example"; // String | 
apiInstance.billingGetSharedStorageBillingOrg(org, (error, data, response) => {
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

[**CombinedBillingUsage**](CombinedBillingUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## billingGetSharedStorageBillingUser

> CombinedBillingUsage billingGetSharedStorageBillingUser(username)

Get shared storage billing for a user

**Warning:** The Billing API is currently in public beta and subject to change.  Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.  Paid minutes only apply to packages stored for private repositories. For more information, see \&quot;[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\&quot;  Access tokens must have the &#x60;user&#x60; scope.

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.BillingApi();
let username = "username_example"; // String | 
apiInstance.billingGetSharedStorageBillingUser(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

[**CombinedBillingUsage**](CombinedBillingUsage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

