# GitHubV3RestApi.InlineObject73

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | Determines if notifications are sent when the webhook is triggered. Set to &#x60;true&#x60; to send notifications. | [optional] [default to true]
**addEvents** | **[String]** | Determines a list of events to be added to the list of events that the Hook triggers for. | [optional] 
**config** | [**ReposOwnerRepoHooksHookIdConfig**](ReposOwnerRepoHooksHookIdConfig.md) |  | [optional] 
**events** | **[String]** | Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events. | [optional] 
**removeEvents** | **[String]** | Determines a list of events to be removed from the list of events that the Hook triggers for. | [optional] 


