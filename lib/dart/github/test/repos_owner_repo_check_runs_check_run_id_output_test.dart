import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for ReposOwnerRepoCheckRunsCheckRunIdOutput
void main() {
    var instance = new ReposOwnerRepoCheckRunsCheckRunIdOutput();

  group('test ReposOwnerRepoCheckRunsCheckRunIdOutput', () {
    // Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. Annotations are visible in GitHub's pull request UI. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://developer.github.com/v3/checks/runs/#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about annotations in the UI, see \"[About status checks](https://help.github.com/articles/about-status-checks#checks)\". See the [`annotations` object](https://developer.github.com/v3/checks/runs/#annotations-object-1) description for details.
    // List<ReposOwnerRepoCheckRunsOutputAnnotations> annotations (default value: [])
    test('to test the property `annotations`', () async {
      // TODO
    });

    // Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://developer.github.com/v3/checks/runs/#annotations-object-1) description for details.
    // List<ReposOwnerRepoCheckRunsOutputImages> images (default value: [])
    test('to test the property `images`', () async {
      // TODO
    });

    // Can contain Markdown.
    // String summary (default value: null)
    test('to test the property `summary`', () async {
      // TODO
    });

    // Can contain Markdown.
    // String text (default value: null)
    test('to test the property `text`', () async {
      // TODO
    });

    // **Required**.
    // String title (default value: null)
    test('to test the property `title`', () async {
      // TODO
    });


  });

}
