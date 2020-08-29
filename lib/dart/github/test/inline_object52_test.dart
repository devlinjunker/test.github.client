import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for InlineObject52
void main() {
    var instance = new InlineObject52();

  group('test InlineObject52', () {
    // Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](https://developer.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://developer.github.com/v3/checks/runs/#actions-object) description. To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions).\" To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions).\"
    // List<ReposOwnerRepoCheckRunsActions> actions (default value: [])
    test('to test the property `actions`', () async {
      // TODO
    });

    // The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
    // String completedAt (default value: null)
    test('to test the property `completedAt`', () async {
      // TODO
    });

    // **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`. When the conclusion is `action_required`, additional details should be provided on the site specified by `details_url`.   **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. Only GitHub can change a check run conclusion to `stale`.
    // String conclusion (default value: null)
    test('to test the property `conclusion`', () async {
      // TODO
    });

    // The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.
    // String detailsUrl (default value: null)
    test('to test the property `detailsUrl`', () async {
      // TODO
    });

    // A reference for the run on the integrator's system.
    // String externalId (default value: null)
    test('to test the property `externalId`', () async {
      // TODO
    });

    // The SHA of the commit.
    // String headSha (default value: null)
    test('to test the property `headSha`', () async {
      // TODO
    });

    // The name of the check. For example, \"code-coverage\".
    // String name (default value: null)
    test('to test the property `name`', () async {
      // TODO
    });

    // ReposOwnerRepoCheckRunsOutput output (default value: null)
    test('to test the property `output`', () async {
      // TODO
    });

    // The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
    // String startedAt (default value: null)
    test('to test the property `startedAt`', () async {
      // TODO
    });

    // The current status. Can be one of `queued`, `in_progress`, or `completed`.
    // String status (default value: "queued")
    test('to test the property `status`', () async {
      // TODO
    });


  });

}
