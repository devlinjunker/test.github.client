# openapi.model.InlineObject19

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Determines if notifications are sent when the webhook is triggered. Set to &#x60;true&#x60; to send notifications. | [optional] [default to true]
**config** | [**OrgsOrgHooksConfig**](OrgsOrgHooksConfig.md) |  | [default to null]
**events** | **List&lt;String&gt;** | Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for. | [optional] [default to []]
**name** | **String** | Must be passed as \&quot;web\&quot;. | [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


