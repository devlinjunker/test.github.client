# openapi.model.ReposOwnerRepoPagesSource

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **String** | The repository branch used to publish your [site&#39;s source files](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/). Can be either &#x60;master&#x60; or &#x60;gh-pages&#x60;. | [optional] [default to null]
**path** | **String** | The repository directory that includes the source files for the Pages site. When &#x60;branch&#x60; is &#x60;master&#x60;, you can change &#x60;path&#x60; to &#x60;/docs&#x60;. When &#x60;branch&#x60; is &#x60;gh-pages&#x60;, you are unable to specify a &#x60;path&#x60; other than &#x60;/&#x60;. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


