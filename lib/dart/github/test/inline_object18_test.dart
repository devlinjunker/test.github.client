import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for InlineObject18
void main() {
    var instance = new InlineObject18();

  group('test InlineObject18', () {
    // An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://developer.github.com/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret) endpoints.
    // List<int> selectedRepositoryIds (default value: [])
    test('to test the property `selectedRepositoryIds`', () async {
      // TODO
    });


  });

}
