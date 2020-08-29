# openapi.model.InlineObject73

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Determines if notifications are sent when the webhook is triggered. Set to &#x60;true&#x60; to send notifications. | [optional] [default to true]
**addEvents** | **List&lt;String&gt;** | Determines a list of events to be added to the list of events that the Hook triggers for. | [optional] [default to []]
**config** | [**ReposOwnerRepoHooksHookIdConfig**](ReposOwnerRepoHooksHookIdConfig.md) |  | [optional] [default to null]
**events** | **List&lt;String&gt;** | Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events. | [optional] [default to []]
**removeEvents** | **List&lt;String&gt;** | Determines a list of events to be removed from the list of events that the Hook triggers for. | [optional] [default to []]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


