import 'package:openapi/api.dart';
import 'package:test/test.dart';


/// tests for CodeScanningApi
void main() {
  var instance = CodeScanningApi();

  group('tests for CodeScanningApi', () {
    // Get a code scanning alert
    //
    // Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.  The security `alert_id` is found at the end of the security alert's URL. For example, the security alert ID for `https://github.com/Octo-org/octo-repo/security/code-scanning/88` is `88`.
    //
    //Future<CodeScanningAlert> codeScanningGetAlert(String owner, String repo, int alertId) async 
    test('test codeScanningGetAlert', () async {
      // TODO
    });

    // List code scanning alerts for a repository
    //
    // Lists all open code scanning alerts for the default branch (usually `master`) and protected branches in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.
    //
    //Future<List<CodeScanningAlert>> codeScanningListAlertsForRepo(String owner, String repo, { String state, String ref }) async 
    test('test codeScanningListAlertsForRepo', () async {
      // TODO
    });

  });
}
