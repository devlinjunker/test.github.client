# openapi.model.ReposOwnerRepoCheckRunsOutputAnnotations

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotationLevel** | **String** | The level of the annotation. Can be one of &#x60;notice&#x60;, &#x60;warning&#x60;, or &#x60;failure&#x60;. | [default to null]
**endColumn** | **int** | The end column of the annotation. Annotations only support &#x60;start_column&#x60; and &#x60;end_column&#x60; on the same line. Omit this parameter if &#x60;start_line&#x60; and &#x60;end_line&#x60; have different values. | [optional] [default to null]
**endLine** | **int** | The end line of the annotation. | [default to null]
**message** | **String** | A short description of the feedback for these lines of code. The maximum size is 64 KB. | [default to null]
**path** | **String** | The path of the file to add an annotation to. For example, &#x60;assets/css/main.css&#x60;. | [default to null]
**rawDetails** | **String** | Details about this annotation. The maximum size is 64 KB. | [optional] [default to null]
**startColumn** | **int** | The start column of the annotation. Annotations only support &#x60;start_column&#x60; and &#x60;end_column&#x60; on the same line. Omit this parameter if &#x60;start_line&#x60; and &#x60;end_line&#x60; have different values. | [optional] [default to null]
**startLine** | **int** | The start line of the annotation. | [default to null]
**title** | **String** | The title that represents the annotation. The maximum size is 255 characters. | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


