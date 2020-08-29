import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for ReposOwnerRepoGitTreesTree
void main() {
    var instance = new ReposOwnerRepoGitTreesTree();

  group('test ReposOwnerRepoGitTreesTree', () {
    // The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.      **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
    // String content (default value: null)
    test('to test the property `content`', () async {
      // TODO
    });

    // The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.
    // String mode (default value: null)
    test('to test the property `mode`', () async {
      // TODO
    });

    // The file referenced in the tree.
    // String path (default value: null)
    test('to test the property `path`', () async {
      // TODO
    });

    // The SHA1 checksum ID of the object in the tree. Also called `tree.sha`. If the value is `null` then the file will be deleted.      **Note:** Use either `tree.sha` or `content` to specify the contents of the entry. Using both `tree.sha` and `content` will return an error.
    // String sha (default value: null)
    test('to test the property `sha`', () async {
      // TODO
    });

    // Either `blob`, `tree`, or `commit`.
    // String type (default value: null)
    test('to test the property `type`', () async {
      // TODO
    });


  });

}
