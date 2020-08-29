import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for ReposOwnerRepoCheckRunsOutputAnnotations
void main() {
    var instance = new ReposOwnerRepoCheckRunsOutputAnnotations();

  group('test ReposOwnerRepoCheckRunsOutputAnnotations', () {
    // The level of the annotation. Can be one of `notice`, `warning`, or `failure`.
    // String annotationLevel (default value: null)
    test('to test the property `annotationLevel`', () async {
      // TODO
    });

    // The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
    // int endColumn (default value: null)
    test('to test the property `endColumn`', () async {
      // TODO
    });

    // The end line of the annotation.
    // int endLine (default value: null)
    test('to test the property `endLine`', () async {
      // TODO
    });

    // A short description of the feedback for these lines of code. The maximum size is 64 KB.
    // String message (default value: null)
    test('to test the property `message`', () async {
      // TODO
    });

    // The path of the file to add an annotation to. For example, `assets/css/main.css`.
    // String path (default value: null)
    test('to test the property `path`', () async {
      // TODO
    });

    // Details about this annotation. The maximum size is 64 KB.
    // String rawDetails (default value: null)
    test('to test the property `rawDetails`', () async {
      // TODO
    });

    // The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
    // int startColumn (default value: null)
    test('to test the property `startColumn`', () async {
      // TODO
    });

    // The start line of the annotation.
    // int startLine (default value: null)
    test('to test the property `startLine`', () async {
      // TODO
    });

    // The title that represents the annotation. The maximum size is 255 characters.
    // String title (default value: null)
    test('to test the property `title`', () async {
      // TODO
    });


  });

}
