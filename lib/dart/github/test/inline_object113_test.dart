import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for InlineObject113
void main() {
    var instance = new InlineObject113();

  group('test InlineObject113', () {
    // The body text of the pull request review
    // String body (default value: null)
    test('to test the property `body`', () async {
      // TODO
    });

    // The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.
    // String event (default value: null)
    test('to test the property `event`', () async {
      // TODO
    });


  });

}
