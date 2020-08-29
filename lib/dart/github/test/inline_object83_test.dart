import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for InlineObject83
void main() {
    var instance = new InlineObject83();

  group('test InlineObject83', () {
    // Login for the user that this issue should be assigned to. **This field is deprecated.**
    // String assignee (default value: null)
    test('to test the property `assignee`', () async {
      // TODO
    });

    // Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
    // List<String> assignees (default value: [])
    test('to test the property `assignees`', () async {
      // TODO
    });

    // The contents of the issue.
    // String body (default value: null)
    test('to test the property `body`', () async {
      // TODO
    });

    // Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._
    // List<OneOf<string,object>> labels (default value: [])
    test('to test the property `labels`', () async {
      // TODO
    });

    // The `number` of the milestone to associate this issue with or `null` to remove current. _NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise._
    // int milestone (default value: null)
    test('to test the property `milestone`', () async {
      // TODO
    });

    // State of the issue. Either `open` or `closed`.
    // String state (default value: null)
    test('to test the property `state`', () async {
      // TODO
    });

    // The title of the issue.
    // String title (default value: null)
    test('to test the property `title`', () async {
      // TODO
    });


  });

}
