import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for CredentialAuthorization
void main() {
    var instance = new CredentialAuthorization();

  group('test CredentialAuthorization', () {
    // Date when the credential was last accessed. May be null if it was never accessed
    // DateTime credentialAccessedAt (default value: null)
    test('to test the property `credentialAccessedAt`', () async {
      // TODO
    });

    // Date when the credential was authorized for use.
    // DateTime credentialAuthorizedAt (default value: null)
    test('to test the property `credentialAuthorizedAt`', () async {
      // TODO
    });

    // Unique identifier for the credential.
    // int credentialId (default value: null)
    test('to test the property `credentialId`', () async {
      // TODO
    });

    // Human-readable description of the credential type.
    // String credentialType (default value: null)
    test('to test the property `credentialType`', () async {
      // TODO
    });

    // Unique string to distinguish the credential. Only included in responses with credential_type of SSH Key.
    // String fingerprint (default value: null)
    test('to test the property `fingerprint`', () async {
      // TODO
    });

    // User login that owns the underlying credential.
    // String login (default value: null)
    test('to test the property `login`', () async {
      // TODO
    });

    // List of oauth scopes the token has been granted.
    // List<String> scopes (default value: [])
    test('to test the property `scopes`', () async {
      // TODO
    });

    // Last eight characters of the credential. Only included in responses with credential_type of personal access token.
    // String tokenLastEight (default value: null)
    test('to test the property `tokenLastEight`', () async {
      // TODO
    });


  });

}
