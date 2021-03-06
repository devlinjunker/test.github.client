# GitHubV3RestApi.MetaApi

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metaGet**](MetaApi.md#metaGet) | **GET** /meta | Get GitHub meta information
[**metaGetOctocat**](MetaApi.md#metaGetOctocat) | **GET** /octocat | Get Octocat
[**metaGetZen**](MetaApi.md#metaGetZen) | **GET** /zen | Get the Zen of GitHub
[**metaRoot**](MetaApi.md#metaRoot) | **GET** / | GitHub API Root



## metaGet

> ApiOverview metaGet()

Get GitHub meta information

This endpoint provides a list of GitHub&#39;s IP addresses. For more information, see \&quot;[About GitHub&#39;s IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/).\&quot;

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MetaApi();
apiInstance.metaGet((error, data, response) => {
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

[**ApiOverview**](ApiOverview.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## metaGetOctocat

> String metaGetOctocat(opts)

Get Octocat

Get the octocat as ASCII art

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MetaApi();
let opts = {
  's': "s_example" // String | The words to show in Octocat's speech bubble
};
apiInstance.metaGetOctocat(opts, (error, data, response) => {
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
 **s** | **String**| The words to show in Octocat&#39;s speech bubble | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octocat-stream


## metaGetZen

> String metaGetZen()

Get the Zen of GitHub

Get a random sentence from the Zen of GitHub

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MetaApi();
apiInstance.metaGetZen((error, data, response) => {
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

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## metaRoot

> InlineResponse200 metaRoot()

GitHub API Root

Get Hypermedia links to resources accessible in GitHub&#39;s REST API

### Example

```javascript
import GitHubV3RestApi from 'git_hub_v3_rest_api';

let apiInstance = new GitHubV3RestApi.MetaApi();
apiInstance.metaRoot((error, data, response) => {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

