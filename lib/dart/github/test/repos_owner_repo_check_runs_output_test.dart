import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for ReposOwnerRepoCheckRunsOutput
void main() {
    var instance = new ReposOwnerRepoCheckRunsOutput();

  group('test ReposOwnerRepoCheckRunsOutput', () {
    // Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://developer.github.com/v3/checks/runs/#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see \"[About status checks](https://help.github.com/articles/about-status-checks#checks)\". See the [`annotations` object](https://developer.github.com/v3/checks/runs/#annotations-object) description for details about how to use this parameter.
    // List<ReposOwnerRepoCheckRunsOutputAnnotations> annotations (default value: [])
    test('to test the property `annotations`', () async {
      // TODO
    });

    // Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://developer.github.com/v3/checks/runs/#images-object) description for details.
    // List<ReposOwnerRepoCheckRunsOutputImages> images (default value: [])
    test('to test the property `images`', () async {
      // TODO
    });

    // The summary of the check run. This parameter supports Markdown.
    // String summary (default value: null)
    test('to test the property `summary`', () async {
      // TODO
    });

    // The details of the check run. This parameter supports Markdown.
    // String text (default value: null)
    test('to test the property `text`', () async {
      // TODO
    });

    // The title of the check run.
    // String title (default value: null)
    test('to test the property `title`', () async {
      // TODO
    });


  });

}
