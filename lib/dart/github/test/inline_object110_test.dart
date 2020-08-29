import 'package:openapi/api.dart';
import 'package:test/test.dart';

// tests for InlineObject110
void main() {
    var instance = new InlineObject110();

  group('test InlineObject110', () {
    // **Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.
    // String body (default value: null)
    test('to test the property `body`', () async {
      // TODO
    });

    // Use the following table to specify the location, destination, and contents of the draft review comment.
    // List<ReposOwnerRepoPullsPullNumberReviewsComments> comments (default value: [])
    test('to test the property `comments`', () async {
      // TODO
    });

    // The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.
    // String commitId (default value: null)
    test('to test the property `commitId`', () async {
      // TODO
    });

    // The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://developer.github.com/v3/pulls/reviews/#submit-a-review-for-a-pull-request) when you are ready.
    // String event (default value: null)
    test('to test the property `event`', () async {
      // TODO
    });


  });

}
