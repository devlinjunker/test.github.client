import 'package:openapi/api.dart';
import 'package:test/test.dart';


/// tests for ChecksApi
void main() {
  var instance = ChecksApi();

  group('tests for ChecksApi', () {
    // Create a check run
    //
    // **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.
    //
    //Future<CheckRun> checksCreate(String owner, String repo, { InlineObject52 inlineObject52 }) async 
    test('test checksCreate', () async {
      // TODO
    });

    // Create a check suite
    //
    // **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.  By default, check suites are automatically created when you create a [check run](https://developer.github.com/v3/checks/runs/). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using \"[Update repository preferences for check suites](https://developer.github.com/v3/checks/suites/#update-repository-preferences-for-check-suites)\". Your GitHub App must have the `checks:write` permission to create check suites.
    //
    //Future<CheckSuite> checksCreateSuite(String owner, String repo, { InlineObject54 inlineObject54 }) async 
    test('test checksCreateSuite', () async {
      // TODO
    });

    // Get a check run
    //
    // **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
    //
    //Future<CheckRun> checksGet(String owner, String repo, int checkRunId) async 
    test('test checksGet', () async {
      // TODO
    });

    // Get a check suite
    //
    // **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.  Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
    //
    //Future<CheckSuite> checksGetSuite(String owner, String repo, int checkSuiteId) async 
    test('test checksGetSuite', () async {
      // TODO
    });

    // List check run annotations
    //
    // Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.
    //
    //Future<List<CheckAnnotation>> checksListAnnotations(String owner, String repo, int checkRunId, { int perPage, int page }) async 
    test('test checksListAnnotations', () async {
      // TODO
    });

    // List check runs for a Git reference
    //
    // **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
    //
    //Future<InlineResponse20011> checksListForRef(String owner, String repo, String ref, { String checkName, String status, String filter, int perPage, int page }) async 
    test('test checksListForRef', () async {
      // TODO
    });

    // List check runs in a check suite
    //
    // **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.
    //
    //Future<InlineResponse20011> checksListForSuite(String owner, String repo, int checkSuiteId, { String checkName, String status, String filter, int perPage, int page }) async 
    test('test checksListForSuite', () async {
      // TODO
    });

    // List check suites for a Git reference
    //
    // **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.  Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.
    //
    //Future<InlineResponse20012> checksListSuitesForRef(String owner, String repo, String ref, { int appId, String checkName, int perPage, int page }) async 
    test('test checksListSuitesForRef', () async {
      // TODO
    });

    // Rerequest a check suite
    //
    // Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://developer.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.  To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.
    //
    //Future checksRerequestSuite(String owner, String repo, int checkSuiteId) async 
    test('test checksRerequestSuite', () async {
      // TODO
    });

    // Update repository preferences for check suites
    //
    // Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://developer.github.com/v3/checks/suites/#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.
    //
    //Future<CheckSuitePreference> checksSetSuitesPreferences(String owner, String repo, { InlineObject55 inlineObject55 }) async 
    test('test checksSetSuitesPreferences', () async {
      // TODO
    });

    // Update a check run
    //
    // **Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.  Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.
    //
    //Future<CheckRun> checksUpdate(String owner, String repo, int checkRunId, { InlineObject53 inlineObject53 }) async 
    test('test checksUpdate', () async {
      // TODO
    });

  });
}
