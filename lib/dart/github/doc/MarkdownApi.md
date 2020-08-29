# openapi.api.MarkdownApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *https://api.github.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**markdownRender**](MarkdownApi.md#markdownRender) | **POST** /markdown | Render a Markdown document
[**markdownRenderRaw**](MarkdownApi.md#markdownRenderRaw) | **POST** /markdown/raw | Render a Markdown document in raw mode


# **markdownRender**
> markdownRender(inlineObject13)

Render a Markdown document

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = MarkdownApi();
var inlineObject13 = InlineObject13(); // InlineObject13 | 

try { 
    api_instance.markdownRender(inlineObject13);
} catch (e) {
    print("Exception when calling MarkdownApi->markdownRender: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject13** | [**InlineObject13**](InlineObject13.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **markdownRenderRaw**
> String markdownRenderRaw(body)

Render a Markdown document in raw mode

You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.

### Example 
```dart
import 'package:openapi/api.dart';

var api_instance = MarkdownApi();
var body = String(); // String | 

try { 
    var result = api_instance.markdownRenderRaw(body);
    print(result);
} catch (e) {
    print("Exception when calling MarkdownApi->markdownRenderRaw: $e\n");
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain, text/x-markdown
 - **Accept**: text/html

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

