import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for InlineObject53
void main() {
    var instance = new InlineObject53();

  group('test InlineObject53', () {
    // Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://developer.github.com/v3/checks/runs/#actions-object) description. To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions).\"
    // List<ReposOwnerRepoCheckRunsActions> actions (default value: [])
    test('to test the property `actions`', () async {
      // TODO
    });

    // The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
    // String completedAt (default value: null)
    test('to test the property `completedAt`', () async {
      // TODO
    });

    // **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`.   **Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. Only GitHub can change a check run conclusion to `stale`.
    // String conclusion (default value: null)
    test('to test the property `conclusion`', () async {
      // TODO
    });

    // The URL of the integrator's site that has the full details of the check.
    // String detailsUrl (default value: null)
    test('to test the property `detailsUrl`', () async {
      // TODO
    });

    // A reference for the run on the integrator's system.
    // String externalId (default value: null)
    test('to test the property `externalId`', () async {
      // TODO
    });

    // The name of the check. For example, \"code-coverage\".
    // String name (default value: null)
    test('to test the property `name`', () async {
      // TODO
    });

    // ReposOwnerRepoCheckRunsCheckRunIdOutput output (default value: null)
    test('to test the property `output`', () async {
      // TODO
    });

    // This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
    // String startedAt (default value: null)
    test('to test the property `startedAt`', () async {
      // TODO
    });

    // The current status. Can be one of `queued`, `in_progress`, or `completed`.
    // String status (default value: null)
    test('to test the property `status`', () async {
      // TODO
    });


  });

}
