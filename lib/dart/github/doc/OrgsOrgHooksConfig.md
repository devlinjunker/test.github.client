# openapi.model.OrgsOrgHooksConfig

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contentType** | **String** | The media type used to serialize the payloads. Supported values include &#x60;json&#x60; and &#x60;form&#x60;. The default is &#x60;form&#x60;. | [optional] [default to null]
**insecureSsl** | **String** | Determines whether the SSL certificate of the host for &#x60;url&#x60; will be verified when delivering payloads. Supported values include &#x60;0&#x60; (verification is performed) and &#x60;1&#x60; (verification is not performed). The default is &#x60;0&#x60;. **We strongly recommend not setting this to &#x60;1&#x60; as you are subject to man-in-the-middle and other attacks.** | [optional] [default to null]
**password** | **String** |  | [optional] [default to null]
**secret** | **String** | If provided, the &#x60;secret&#x60; will be used as the &#x60;key&#x60; to generate the HMAC hex digest value in the [&#x60;X-Hub-Signature&#x60;](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header. | [optional] [default to null]
**url** | **String** | The URL to which the payloads will be delivered. | [default to null]
**username** | **String** |  | [optional] [default to null]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


