import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for ReposOwnerRepoHooksConfig
void main() {
    var instance = new ReposOwnerRepoHooksConfig();

  group('test ReposOwnerRepoHooksConfig', () {
    // The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
    // String contentType (default value: null)
    test('to test the property `contentType`', () async {
      // TODO
    });

    // String digest (default value: null)
    test('to test the property `digest`', () async {
      // TODO
    });

    // Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
    // String insecureSsl (default value: null)
    test('to test the property `insecureSsl`', () async {
      // TODO
    });

    // If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header.
    // String secret (default value: null)
    test('to test the property `secret`', () async {
      // TODO
    });

    // String token (default value: null)
    test('to test the property `token`', () async {
      // TODO
    });

    // The URL to which the payloads will be delivered.
    // String url (default value: null)
    test('to test the property `url`', () async {
      // TODO
    });


  });

}
