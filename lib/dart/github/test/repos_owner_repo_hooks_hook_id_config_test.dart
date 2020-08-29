import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for ReposOwnerRepoHooksHookIdConfig
void main() {
    var instance = new ReposOwnerRepoHooksHookIdConfig();

  group('test ReposOwnerRepoHooksHookIdConfig', () {
    // String address (default value: null)
    test('to test the property `address`', () async {
      // TODO
    });

    // The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
    // String contentType (default value: null)
    test('to test the property `contentType`', () async {
      // TODO
    });

    // Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
    // String insecureSsl (default value: null)
    test('to test the property `insecureSsl`', () async {
      // TODO
    });

    // String room (default value: null)
    test('to test the property `room`', () async {
      // TODO
    });

    // If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header.
    // String secret (default value: null)
    test('to test the property `secret`', () async {
      // TODO
    });

    // The URL to which the payloads will be delivered.
    // String url (default value: null)
    test('to test the property `url`', () async {
      // TODO
    });


  });

}
